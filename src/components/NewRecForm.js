import React, {useState} from 'react';

function NewRecForm ({addNewRec}) {

    const [newRecObj, setNewRecObj] = useState({
        name: "",
        borough: "",
        area: "",
        category: "",
        url: "",
        img: "",
        description: "",
        likes: 0,
        user: ""
    })

    function handleFormSubmit (e) {
        e.preventDefault()

        if (newRecObj.category) {
            addNewRec(newRecObj) 
        }
        else {
            alert('Please select a category!') 
        }

        setNewRecObj({
            name: "",
            borough: "",
            area: "",
            category: "",
            url: "",
            img: "",
            description: "",
            user: ""
        });
    }

    function handleChange (e){
        const key = e.target.name;
        const value = e.target.value;
        
        setNewRecObj({
           ...newRecObj,
            [key]: value
        })
    }

    console.log(newRecObj);

    return(
        <div className="new-rec-form">
           <form onSubmit={handleFormSubmit}>
                <label> Biz Name:
                    <input 
                        type="text" 
                        name="name"
                        value={newRecObj.name}
                        onChange={handleChange} />
                </label>
                <br /> 
                <label> Category: 
                    <select name="category" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="🎶">🎶</option>
                        <option value="🎨">🎨</option>
                        <option value="☕️">☕️</option>
                        <option value="🌭">🌭</option>
                        <option value="🍸">🍸</option>  
                    </select> 
                    {/* <input type="radio" value="Music" onChange={handleChange} /> 🎶
                    <input type="radio" value={newRecObj.category} onChange={handleChange} /> Art🎨
                    <input type="radio" value={newRecObj.category} onChange={handleChange} /> Restaurant
                    <input type="radio" value={newRecObj.category} onChange={handleChange} /> Bar */}
                </label>
                <br /> 
                <label> Borough:
                    <input type ="radio" name="borough" value="Brooklyn" onChange={handleChange} /> Brooklyn
                    <input type ="radio" name="borough" value="Manhattan" onChange={handleChange} /> Manhattan
                    {/* <select name="borough" onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Brooklyn">Brooklyn</option>
                        <option value="Manhattan">Manhattan</option>
                    </select> */}
                </label>
                < br />
                <label> Hood:
                    <input 
                        type="text" 
                        name="area"
                        value={newRecObj.area}
                        onChange={handleChange} />
                </label>
                <br />
                <label> Website:
                    <input 
                        type="text" 
                        name="url"
                        value={newRecObj.url}
                        onChange={handleChange} />
                </label>
                <br />
                <label> Image:
                    <input 
                        type="text" 
                        name="img"
                        value={newRecObj.img}
                        onChange={handleChange} />
                </label>
                <br />
                <label> Say more fam!: 
                    <input 
                        type="text" 
                        name="description"
                        value={newRecObj.description}
                        onChange={handleChange} />
                </label>
                <br />
                <label> What's your name?: 
                    <input 
                        type="text" 
                        name="user"
                        value={newRecObj.user}
                        onChange={handleChange} />
                </label>
                <br />
                    <input type="submit" value="Submit Rec" />
            </form>
        </div>
    )
}
export default NewRecForm;