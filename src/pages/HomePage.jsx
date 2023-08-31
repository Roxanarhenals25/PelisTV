import React, { useContext } from 'react';
import { FilterBar, PokemonList } from '../components';
import { PokemonContext } from '../context/PokemonContext';
import MenuIcon from '@mui/icons-material/Menu';

export const HomePage = () => {

    const {onClickLoadMore, active, setActive} = useContext(PokemonContext)

	return (
		<>
			<div className='container-filter container'>
				<div className='icon-filter' onClick={() => setActive(!active)}>
					<MenuIcon className="icon" />
					<span className='menu-type'>Menú</span>
				</div>
			</div>
			<PokemonList />
            <FilterBar />
            <div className="container-btn-load-more container">
                <button className='btn-load-more' onClick={onClickLoadMore}>
                    Cargar más
                </button>
            </div>
		</>
	);
};