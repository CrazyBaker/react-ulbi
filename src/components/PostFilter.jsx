import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

export default function PostFilter({filter, setFilter}) {
  return (
    <div>
        <MyInput 
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder={'Поиск...'}
        />
        <MySelect
          value={filter.sort}
          onChange={selectSort => setFilter({...filter, sort: selectSort})}
          defaultValue="Сортировка по: "
          option = {[
            {value: 'title', name:'По названию'},
            {value:'body', name:'По описанию'},
          ]}
        />
      </div>
  )
}