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
           <form className="form-container" onSubmit={handleFormSubmit}>
                <label className="form-labels"> Biz Name: 
                    <input 
                        className="form-inputs" 
                        type="text" 
                        name="name"
                        value={newRecObj.name}
                        onChange={handleChange} />
                </label>
                <br /> 
                <label className="form-labels"> Category: 
                    <select name="category" onChange={handleChange} className="form-inputs">
                        <option value="">Select</option>
                        <option value="🎶">🎶</option>
                        <option value="🎨">🎨</option>
                        <option value="☕️">☕️</option>
                        <option value="🌭">🌭</option>
                        <option value="🍸">🍸</option>  
                    </select> 
                </label>
                <br /> 
                <label className="form-labels"> Borough:
                    <input className="form-inputs" type ="radio" name="borough" value="Brooklyn" onChange={handleChange} /> Brooklyn
                    <input className="form-inputs" type ="radio" name="borough" value="Manhattan" onChange={handleChange} /> Manhattan
                </label>
                < br />
                <label className="form-labels"> Hood:
                    <input 
                        className="form-inputs"
                        type="text" 
                        name="area"
                        value={newRecObj.area}
                        onChange={handleChange} />
                </label>
                <br />
                <label className="form-labels"> Website:
                    <input 
                        className="form-inputs"
                        type="text" 
                        name="url"
                        value={newRecObj.url}
                        onChange={handleChange} />
                </label>
                <br />
                <label className="form-labels"> Image:
                    <input 
                        className="form-inputs"
                        type="text" 
                        name="img"
                        value={newRecObj.img}
                        onChange={handleChange} />
                </label>
                <br />
                <label className="form-labels"> Say more fam!: 
                    <input 
                        className="form-inputs"
                        type="text" 
                        name="description"
                        value={newRecObj.description}
                        onChange={handleChange} />
                </label>
                <br />
                <label className="form-labels"> What's your name?:  
                    <input
                        className="form-inputs" 
                        type="text" 
                        name="user"
                        value={newRecObj.user}
                        onChange={handleChange} />
                </label>
                <br />
                    <input id='submit-form'type="submit" value="Submit Rec" />
            </form>
        </div>
    )
}
export default NewRecForm;