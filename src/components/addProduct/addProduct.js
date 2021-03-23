import Section from "../section/section"

const AddProduct = function (props) {
    // 

    const handlelUpload = (e) => {
        console.log(e.target.files)
        // use state variable for file 
        // ref: https://programmingwithmosh.com/javascript/react-file-upload-proper-server-side-nodejs-easy/
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <div>
            <form onSubmit={handleSubmit.bind(this)}>
                <div>
                    <Section>
                        <div>
                            <label for="title">title</label>
                            <input type="text" name="title" />
                        </div>
                        <div>
                            <label for="price">price</label>
                            <input type="text" name="price" />
                        </div>
                        <div>
                            <label for="tags">add tags:</label>
                            <input name="tags" />
                            <button >Add Tag</button>
                        </div>
                        <div>
                            <label>add image to product</label>
                            <input type="file" name="image" onChange={handlelUpload.bind(this)}/>
                        </div>
                        <div>
                            <input type="checkbox" name="showOnline" value="show online"/>
                            <label for="showOnline">show online</label>
                        </div>
                    </Section>
                    <Section name="Features">
                        <div>
                            <label for="featureNote">feature note</label>
                            <textarea name="featureNote" type="text" placeholder="write something for the features you about to list..."></textarea>
                        </div>
                        <div>
                            <label for="feature">features:</label>
                            <input name="feature" type="textbox" />
                            <button>add feature</button>
                        </div>
                    </Section>

                </div>
            </form>
        </div>
    )
}

export default AddProduct