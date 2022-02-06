import { useState } from "react"

export const Form = () =>{

    const [ FormData, setFormDAta] = useState({
        userName : "",
        age : ""
    });

    const handleChange = (e) =>{
        // console.log(e.target.value, e.target.name);

        const {name} = e.target;
            console.log("targeting =>", {name});

            setFormDAta({
                ...FormData,
                [name] : e.target.value
            })
            console.log( FormData);
    }

    return(
        <form onSubmit={ (e) =>{
            e.preventDefault();
            // let data = {
            //     userName : e.target.userName.value,
            //     age :  e.target.age.value
            // }
            // // console.log(data)
            // setFormDAta(data)
            // console.log(FormData);

            const {name} = e.target;
            console.log("targeting =>", {name});

            setFormDAta({
                ...FormData,
                [name] : e.target.value
            })

            console.log("S U B M I T E D",FormData);
        }}>
            <input type="text"
            placeholder="name"
            name="userName"
            onChange={handleChange} />

            <input type="text"
            placeholder="age"
            name="age"
            onChange={handleChange} />

            <input type="submit" value="submit" />
        
        </form>
    )
}