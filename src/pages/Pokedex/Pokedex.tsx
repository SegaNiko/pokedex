import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokemonCard from './components/PokemonCard/PokemonCard';
import PokemonSelected from './components/PokemonSelected/PokemonSelected';
import { Container, Loader, Layout } from '@components';
import { PokedexWrap, PokedexBtn, PokedexBtnWrap, PokedexDropdownWrap, PokedexNoMutch } from './styles';
import { Modal, Dropdown } from '@ui-kit';

import { getMorePokemons, getPokemons, getPokemonsTypes } from '@store/PokedexSlice';
import { selectPageParams, selectPokemons, selectTypes } from '@store/store';
import { apiEachPokemon, apiPokemonTypes } from '@api/apiPokedex';
import { Pokemon, emptyPokemon } from '@models/pokemon';
import { filterPokemonByType } from '@utils/filterPokemonByType';

export const Pokedex = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [loadingPokemons, setLoadingPokemons] = useState(true);
  const [loadingMorePokemons, setLoadingMorePokemons] = useState(false);

  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>(emptyPokemon);
  const [openSelectedPokemonModal, setOpenSelectedPokemonModal] = useState(false);
  const pokemons = useSelector(selectPokemons);
  const { limit, offset } = useSelector(selectPageParams);
  const types = useSelector(selectTypes);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!pokemons.length) {
      setLoadingPokemons(true);
      apiEachPokemon({ limit, offset }).then(res => {
        dispatch(getPokemons(res));
      });
      apiPokemonTypes().then(res => {
        dispatch(getPokemonsTypes(res.data.results));
        setLoadingPokemons(false);
      });
    }
  }, [dispatch, limit, offset, pokemons.length]);

  const loadMorePokemons = () => {
    setLoadingMorePokemons(true);
    apiEachPokemon({ limit: limit, offset: offset + 12 }).then(res => {
      dispatch(getMorePokemons(res));
      setLoadingMorePokemons(false);
    });
  };

  const handleCloseModal = () => {
    setOpenSelectedPokemonModal(false);
    setSelectedPokemon(emptyPokemon);
  };

  const handleOpenSelectedPokemon = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setOpenSelectedPokemonModal(true);
  };

  const renderPokemons = () => {
    const render = filterPokemonByType(pokemons, selectedType).map(pokemon => (
      <PokemonCard pokemon={pokemon} onClick={() => handleOpenSelectedPokemon(pokemon)} />
    ));

    if (render.length === 0) {
      return <PokedexNoMutch>There are no matches in Pokemon</PokedexNoMutch>;
    }

    return render;
  };

  const handleChangeDropDown = (value: string) => setSelectedType(value);

  if (loadingPokemons) {
    return (
      <>
        <Layout />
        <Loader />
      </>
    );
  }

  return (
    <>
      <Layout />
      <Container>
        <PokedexDropdownWrap>
          <Dropdown options={types} selectedType={selectedType} onChange={handleChangeDropDown} />
        </PokedexDropdownWrap>
        <PokedexWrap>{renderPokemons()}</PokedexWrap>
        <PokedexBtnWrap onClick={loadMorePokemons}>
          <PokedexBtn disabled={loadingMorePokemons}>Load more pokemons</PokedexBtn>
        </PokedexBtnWrap>
      </Container>
      <Modal isOpen={openSelectedPokemonModal} onClose={handleCloseModal}>
        <PokemonSelected pokemon={selectedPokemon} />
      </Modal>
    </>
  );
};
