import React, { useEffect, useState } from 'react'
import axios from 'axios' 
import type { RouteComponentProps } from 'react-router-dom'
interface IItem {
    filmId: number,  // 改为必填项，因为map需要key
    name: string,
    poster: string
}

interface IResponseData {
    data: {
        films: IItem[]
    }
}

export default function Film(props : RouteComponentProps) {
    const [filmList, setFilmList] = useState<IItem[]>([])
    
    useEffect(() => {
        axios<IResponseData>({
            url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=9363993",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1758531550617130965860353"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            if(Array.isArray(res.data.data.films)) {
                setFilmList(res.data.data.films)
            }
        }).catch(err => {
            console.log('错误:', err); 
        })
        
        return () => {

        }
    }, [])
    
    return (
        <div>
            {filmList.map(item => (
                <div key={item.filmId} style={{ margin:  '10px 0' }}>
                    <img src={item.poster} alt={item.name} style={{ width: '50px' }} onClick={()=>{
                        props.history.push(`/detail/${item.filmId}`)
                    }}/>
                    <span style={{ marginLeft: '10px' }}>{item.name}</span>
                </div>
            ))}
        </div>
    )
}
