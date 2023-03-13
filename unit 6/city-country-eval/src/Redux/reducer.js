import axios from "axios";
import { ADD_CITY_DATA, ADD_COUNTRY_DATA,
     FILTER_CITY_DATA, GET_CITY_DATA, 
     EDIT_CITY_DATA,
     GET_COUNTRY_DATA, MODAL_DATA, SORT_CITY, DELETE_CITY } from "./actionTypes";

const init = {
    city : [],
    filteredCity : [],
    country : [],
    modalData : {}
}

export const reducer = (state = init , {type , payload }) =>{
        switch(type){

            case GET_CITY_DATA :{
                return {...state , city :[ ...payload ], filteredCity : [ ...payload] }
            };

            case GET_COUNTRY_DATA :{
                return {...state , country : [ ...payload ] }
            };

            case ADD_CITY_DATA : {

                axios.post("http://localhost:3001/city-list" , payload)
                return{...state, city : [...state.city , payload] , filteredCity : [...state.filteredCity , payload]}
            };

            case ADD_COUNTRY_DATA :{
                 axios.post("http://localhost:3001/country_list" , payload)
                return{...state, country : [...state.country , payload] }
            }

            case SORT_CITY :{

                let data = [...state.city];

                if(payload == "asc_name"){
                     data.sort( (a,b) => a.name > b.name ? 1 : -1);
                }
                else if(payload == "desc_name"){
                     data.sort( (a,b) => a.name < b.name ? 1 : -1);
                }
                else if(payload == "asc_pop"){
                     data.sort( (a,b) => a.population > b.population ? 1 : -1);
                }
                else if(payload == "desc_pop"){
                     data.sort( (a,b) => a.population < b.population ? 1 : -1);
                }
                else if(payload == "asc_country"){
                     data.sort( (a,b) => a.country > b.country ? 1 : -1);
                }
                else if(payload == "desc_country"){
                     data.sort( (a,b) => a.country < b.country ? 1 : -1);
                }

                 return{...state, filteredCity : [...data]}
            };

            case MODAL_DATA :{
                 return{...state, modalData : payload }
            }

            case EDIT_CITY_DATA : {
                 let data = [...state.city];

                 
               data =  data.map( a =>{
                    if( a.id == payload.id){
                        return payload
                    }
                    else{
                         return a
                    }
                   
                })

                console.log("payload ",payload, data)

                 return{...state, city : data , filteredCity : data }

            }

            case DELETE_CITY :{
                let data = [...state.city];

                data = data.filter( a =>{
                    return a.id !== payload
                })

                 return{...state, city : data , filteredCity : data }

            }


            default : return state;

        }
}


// [ a1 , a2 ,a3 , b1 ,b2, b3 ,c1, c2, c3] city;
// [ a1 , a2 ,a3 , b1 ,b2, b3 ,c1, c2, c3] filter city;

// get me all a =>

// [ a1 , a2 ,a3 , b1 ,b2, b3 ,c1, c2, c3] city;
// [ ... city ]
// [ a1 , a2 ,a3] filter city;


// get me all b =>

// [ a1 , a2 ,a3 , b1 ,b2, b3 ,c1, c2, c3] city;
// [ ... city ]
// [ b1 ,b2, b3 ] filter city;


// /////////////////////////////////////

// 1st  =>  filter data
// sort =>  filter data


// ========================= sort 
// data.sort( (a,b) => a.name - b.name );
// data.sort( (a,b) => a.name > b.name ? 1 : -1);

// [ 2,5,3,1] => [1,2,3,5]
// [... push push push push]