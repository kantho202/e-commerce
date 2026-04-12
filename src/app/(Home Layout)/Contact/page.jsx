import React from 'react';

const page = () => {
    return (
        <div>
            <h1>This  is a contact page </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates delectus voluptas rem mollitia fuga aspernatur voluptate assumenda quod at magnam saepe numquam voluptatibus laborum quo eum, esse culpa? Nobis, nemo!</p>
            <div>
                <h1>contact </h1>
                <h1>Email : dihaymoon@gmail.com</h1>
                <p>Phone :01851212</p>
                <div>
                    <fieldset>
                        <label > Contact Information </label>
                        <input type="text" />
                        <label > Social Information </label>
                        <input type="text" />
                        <label >  Information </label>
                        <input type="text" />
                    </fieldset>
                </div>
            </div>
        </div>

    );
};

export default page;