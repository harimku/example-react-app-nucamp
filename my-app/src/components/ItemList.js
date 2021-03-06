/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import Card from './Card'
import styled from '@emotion/styled'

const CharactersWrapper =  styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
    height: 100%;
`
const ItemList = ({ items }) => {
    const [selectedItem, setSelectedItem] = useState('')

    const selectItem = (name) => {
        setSelectedItem(name)
    }

    return (
        <CharactersWrapper>
            {items.data.map((item, index) => <Card key={index} selected={selectedItem === item.name} onClick={selectItem} item={item} />)}
        </CharactersWrapper>
    )
}

export default ItemList