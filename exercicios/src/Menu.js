import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import Inverter, { MegaSena } from './componentes/Multi';
import Contador from './componentes/Contador';
import Plataformas from './componentes/Plataformas';
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento';
import Avo from './componentes/ComunicacaoDireta';
import {TextoSincronizado} from './componentes/ComunicacaoIndireta';
import ListaFlex from './componentes/ListaFlex';
import Flex from './componentes/Flex';

export default createDrawerNavigator({
    Flex : {
        screen: Flex
    },
    ListaFlex : {
        screen: ListaFlex
    },
    TextoSincronizado: {
        screen: TextoSincronizado
    },
    Avo: {
        screen: () => <Avo nome='Joao' sobrenome='Silva' />
    },
    Evento: {
        screen: Evento
    },
    ValidarProps:{
        screen: () => <ValidarProps ano={18}/>
    },
    Palataformas:{
        screen: Plataformas
    },
    Contador:{
        screen: () => <Contador numeroInicial={8} />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: {title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo!' />
    },
    ParImpar: {
        screen: () => <ParImpar numero={1} />,
        navigationOptions: {title: 'Par ou Ímpar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexivel!!' />
    }
}, {drawerWidth: 300});