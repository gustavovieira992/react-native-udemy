import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity, Platform} from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import todayImage from '../../assets/imgs/today.jpg';
import commomStyles from '../commomStyle';
import Task from '../components/Task';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Agenda extends Component {

    state = {
        tasks: [
            {id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Comprar o Curso de React Native', estimateAt: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Comprar o Curso de React Native', estimateAt: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Comprar o Curso de React Native', estimateAt: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Comprar o Curso de React Native', estimateAt: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Comprar o Curso de React Native', estimateAt: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Comprar o Curso de React Native', estimateAt: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Comprar o Curso de React Native', estimateAt: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Comprar o Curso de React Native', estimateAt: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Comprar o Curso de React Native', estimateAt: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date(), doneAt: null},
            {id: Math.random(), desc: 'Comprar o Curso de React Native', estimateAt: new Date(), doneAt: new Date()},
            {id: Math.random(), desc: 'Concluir o curso', estimateAt: new Date(), doneAt: null},
        ],
        visibleTasks: [],
        showDoneTasks: true
    }

    filterTask = () => {
        let visibleTasks = null;
        if (this.state.showDoneTasks) {
            visibleTasks = [...this.state.tasks];
        } else {
            const pending = task => task.doneAt === null;
            visibleTasks = this.state.task.filter(pending);
        }
        this.setState({visibleTasks});
    }

    toogleFilter = () => {
        this.setState({showDoneTasks: !this.state.showDoneTasks});
    }    

    toogleTask = id => {
    
        const tasks = this.state.tasks.map(task => {
            if (task.id === id) {
                task = {...task};
                task.doneAt = task.doneAt ? null : new Date();
            }
            return task;
        })
        this.setState({tasks})
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subtitle}>
                            {moment().locale('pt-br').format('ddd, D [de] MMMM')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskContainer}>
                    <FlatList data={this.state.tasks} 
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={ ({item}) =>
                            <Task {...item} toogleTask={this.toogleTask}/>
                        } 
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: commomStyles.fontFamily,
        color: commomStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: commomStyles.fontFamily,
        color: commomStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },
    taskContainer: {
        flex: 7
    }
})