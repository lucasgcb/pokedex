import { MenuItem, Select } from "@material-ui/core";
import React, {useEffect} from "react";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import * as echarts from 'echarts'
import './pokemon-display.css'

const PokemonDisplay: FunctionComponent = () => {
    
    const [selectedPokemon, setSelectedPokemon] = React.useState('');
    const [availablePokemon, setAvailablePokemon] = React.useState<PokemonListItem[]>([]);

    const pokemon = useSelector((state:ApplicationState)=> state.pokemonSelected)
    const handleChange = (event: React.ChangeEvent<{ value: string }>) => {
      setSelectedPokemon(event.target.value);
    };

    useEffect(()=>{
        if(pokemon.isFetched)
            buildStatRadarPlot('pokemon-stat-plot')
    },[pokemon.isFetched])

    const buildStatRadarPlot = (id:string):echarts.ECharts =>{
        const chartDom = document.getElementById(id)
        if(chartDom==null)
          throw ('Radar Chart div disappeared')
        const myChart = echarts.init(chartDom)
        const option = {
            title: {
                text: '基础雷达图'
            },
            legend: {
                data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
            },
            radar: {
                indicator: [
                    { name: 'HP', max: 120},
                    { name: 'Attack', max: 120},
                    { name: 'Special Attack', max: 120},
                    { name: 'Special Defense', max: 120},
                    { name: 'Speed', max: 120},
                ]
            },
            series: [{
                name: `${pokemon.name} stats`,
                type: 'radar',
                data: [
                    {
                        value: [pokemon.stats.hp, pokemon.stats.attack, pokemon.stats.specialAttack, pokemon.stats.specialDefense, pokemon.stats.speed],
                        name: '预算分配（Allocated Budget）'
                    },
                ]
            }]
        }
        myChart.setOption(option)
        return myChart
      }  

    return <div id="pokemon-display-parent">
        {pokemon.name}
        <div id="pokemon-stat-plot">

        </div>
    </div>
}

export default PokemonDisplay
