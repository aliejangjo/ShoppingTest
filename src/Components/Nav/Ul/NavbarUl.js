import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavbarUl.css'
import Dropdown from '../../Button/DropDown/Dropdown';
import axios from 'axios';

const NavbarUl = (props) => {
    const [categories, setCategories] = useState([])
    const Ul = [
        {
            name: 'Category',
            link: 'Category',
            type: 'dropdown',
            CategoryDropItems: categories
        }, {
            name: 'Top Selling',
            link: 'TopSelling',
            type: 'link'
        }
        , {
            name: 'Discount',
            link: 'Discount',
            type: 'link'
        }
    ]

    useEffect(() => {
        const getData = async () => {
            await axios.get('https://dummyjson.com/products').then(res => {
                const newCategories = res.data.products.map(item => ({
                    title: item.category,
                    path: `Category/${item.category}`,
                }));
                const uniqueCategories = [...categories, ...newCategories]
                    .filter((category, index, self) => {
                        return (
                            index === self.findIndex((c) => c.title === category.title)
                        );
                    });
                setCategories(uniqueCategories);
            }).catch((err) => console.log(err))
        }
        getData()
    }, [])

    return (
        <ul className={`${props.display} ${props.direction}`}>
            {Ul.map((item, index) => {
                return <li key={index}>
                    {item.type === 'link' ? <Link to={item.link}>{item.name}</Link> :
                        item.type === 'dropdown' ? <Dropdown collapse={props.collapse} setCollapse={props.setCollapse} type={props.dropdownType} dropItems={item.CategoryDropItems}>{item.name}</Dropdown> : ''}
        </li>
            })}
        </ul >
    );
}

export default NavbarUl;
