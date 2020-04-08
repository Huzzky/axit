import React from 'react';
import './css/second-main.css';


class SM2 extends React.Component {
    constructor() {
        super()
        this.state = {
            descTab: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod sagittis posuere." +
            "Integer volutpat non nunc eget aliquet."+
            "Praesent at eros leo. Etiam pellentesque commodo."
        }
        this.tab1=this.tab1.bind(this)
        this.tab2=this.tab2.bind(this)
        this.tab3=this.tab3.bind(this)
    }

        tab1() {
            console.log("Проверка 1");
            this.setState({descTab: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi euismod sagittis posuere." +
            "Integer volutpat non nunc eget aliquet."+
            "Praesent at eros leo. Etiam pellentesque commodo."});
        }
        tab2() {
            console.log("Проверка 2");
            this.setState({
                descTab: "Возможно, вы помните о том, что мы говорили о специальном методе, используемом для модификации состояния," +
                "доступном в компонентах," +
                "основанных на классах благодаря тому, что они расширяют класс React.Component."
            });
        }
        tab3() {
            console.log("Проверка 3");
            this.setState({
                descTab: "Нужно сразу сказать, что так с состоянием компонентов в React не работают. "+
                "Попытка выполнения подобного кода вызовет ошибку."
            });
        }

    render () {
        return (
            <div className="Tabs">
                <div className="tabs-padding">
                    <div className="bttn-div">
                        <button className="bttn" onClick={this.tab1}>TAB1</button>
                        <button className="bttn" onClick={this.tab2}>TAB2</button>
                        <button className="bttn" onClick={this.tab3}>TAB3</button>
                    </div>
                    <p className="desc-tab">{this.state.descTab}</p>
                    <div className="img-tabs">

                    </div>
                </div>
            </div>
        );
    }
}

export default SM2;