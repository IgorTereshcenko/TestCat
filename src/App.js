import { useState } from 'react';
import './app.scss';
import photoCat from './resurses/cat.png';

const App = () => {

    //Представим, что данные к нам приходят динамически.
    const [catsFood, setCatsFood] = useState([
        {
            id: 1,
            descr: 'Сказочное заморское яство',
            name: 'Нямушка',
            taste: 'с фуа-гра',
            dosage: '10 порций, мышь в подарок',
            photo: photoCat,
            weight: '0.5',
            active: false,
            activeText:'Печень утки разварная с артишоками.',
            disable: false
        },
        {
            id: 2,
            descr: 'Сказочное заморское яство',
            name: 'Нямушка',
            taste: 'с рыбой',
            dosage: '40 порций 2 мыши в подарок',
            photo: photoCat,
            weight: '2',
            active: false,
            activeText:'Головы щучьи с чесноком да свежайшая сёмгушка.',
            disable: false
        },
        {
            id: 3,
            descr: 'Сказочное заморское яство',
            name: 'Нямушка',
            taste: 'с курой',
            dosage: '100 порций 5 мышей в подарок заказчик доволен',
            photo: photoCat,
            weight: '5',
            active: false,
            activeText:'Филе из цыплят с трюфелями в бульоне.',
            disable: true
        },  
    ]);
    
    const toggleActive = (id) => {
        setCatsFood(prev => 
            prev.map(item => {
                if(id === item.id) {
                    return {...item, active: !item.active}
                } else {
                    return {...item}
                }
            }))
    }
    
    return (
        <div className="cats-food">
            <h1 className="cats-food__title">Ты сегодня покормил кота?</h1>
            <div className="cats-food__wrapper">
                {catsFood.map(item => {
                    return (
                        <div 
                            className={item.active ? 'cats-food__item cats-food__item_active' : 'cats-food__item'}
                            key={item.id} 
                            onClick={() => toggleActive(item.id)}
                            disable={item.disable ? 'disable' : null}>
                            <span className={item.active ? 'treangle treangle_active' : item.disable ? 'treangle treangle_disable' : 'treangle'}></span>
                            <div className="cats-food__descr-wrapper">
                                <h4 className={item.active ? 'cats-food__descr cats-food__descr_active' : item.disable ? 'cats-food__descr cats-food__descr_disable' : 'cats-food__descr'}
                                    >{item.active ? 'Котэ не одобряет?' : item.descr}
                                </h4>
                                <h2 className={item.disable ? 'cats-food__name cats-food__name_disable' : 'cats-food__name'}>{item.name}</h2>
                                <h4 className={item.disable ? 'cats-food__taste cats-food__taste_disable' : 'cats-food__taste'}>{item.taste}</h4>
                                <div className={item.disable ? 'cats-food__dosage cats-food__dosage_disable' : 'cats-food__dosage'}>{item.dosage}</div>
                            </div>
                            <div className={item.disable ? "cats-food__photo cats-food__photo_disable" : "cats-food__photo"}>
                                <img src={item.photo} alt="cat" />
                            </div>
                            <div className={item.active ? 'cats-food__weight cats-food__weight_active' : item.disable ? 'cats-food__weight cats-food__weight_disable' :  'cats-food__weight'}>
                                {item.weight}
                                <h4 className={item.disable ? 'cats-food__kg cats-food__kg_disable' : 'cats-food__kg'}>кг</h4>
                            </div> 
                            <div className={item.disable ? 'cats-food__link cats-food__link_disable' : 'cats-food__link'}>{item.active ? item.activeText : item.disable ? `Печалька, ${item.taste} закончился.` : <h4>Чего сидишь? Порадуй котэ, <span>купи</span></h4> }</div> 
                        </div>
                    )
                })}   
            </div>
            
        </div>
        
    )
}

export default App;