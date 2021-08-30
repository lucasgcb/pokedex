import { MenuItem, Select } from "@material-ui/core";
import React, {useEffect} from "react";
import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import * as echarts from 'echarts'
import './pokemon-display.css'

const PokemonDisplay: FunctionComponent = () => {
    const [currentImage, setCurrentImage] = React.useState('');

    const pokemon = useSelector((state:ApplicationState)=> state.pokemonSelected)

    useEffect(()=>{
        if(pokemon.isFetched)
        {
            buildStatRadarPlot('pokemon-stat-plot')
            setCurrentImage(pokemon.picture)
        }
    },[pokemon.isFetched])

    const buildStatRadarPlot = (id:string):echarts.ECharts =>{
        const chartDom = document.getElementById(id)
        if(chartDom==null)
          throw ('Radar Chart div disappeared')
        const myChart = echarts.init(chartDom)
        const option = {
            legend: {
                data: ["Base Attributes", ]
            },
            radar: {
                indicator: [
                    { name: 'HP', max: 200},
                    { name: 'Attack', max: 200},
                    { name: 'Special Attack', max: 200},
                    { name: 'Speed', max: 200},
                    { name: 'Special Defense', max: 200},
                    { name: 'Defense', max: 200},
                ]
            },
            series: [{
                name: `${pokemon.name} stats`,
                type: 'radar',
                data: [
                    {
                        value: [pokemon.stats.hp, pokemon.stats.attack, pokemon.stats.specialAttack,
                                pokemon.stats.speed, pokemon.stats.specialDefense, 
                                pokemon.stats.defense],
                        name: 'Pokemon Stats',
                        label: {
                            show: true
                        },
                        symbol: 'rect',
                        areaStyle: {
                            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
                                {
                                    color: 'rgba(255, 145, 124, 0.1)',
                                    offset: 0
                                },
                                {
                                    color: 'rgba(255, 145, 124, 0.9)',
                                    offset: 1
                                }
                            ])
                        }

                    },
                ]
            }]
        }
        myChart.setOption(option)
        return myChart
      }  

    return <div id="pokemon-display-parent">
        <div id="pokemon-profile">
            <img src={currentImage}></img>
        </div>
        <div id="pokemon-stat-title">
         {`${pokemon.name} base stats`}
        </div>
        <div id="pokemon-stat-plot-parent">
            <div id="pokemon-stat-plot"></div>
        </div>
        <div id="pokemon-curiosity">
            Total Base Stats: {sumAllBaseStats(pokemon)} pts.
        </div>
    </div>
}

export default PokemonDisplay
function sumAllBaseStats(pokemon: PokemonSelectedState): React.ReactNode {
    return Object.values(pokemon.stats).reduce((total,current) => {
        return current + total
    })
}

