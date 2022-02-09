import './write.css'
export default function Write(){
    return (
        <div className='write'>
            <form className='writeForm'>

                <div className="writeFormGroup">
                    <label htmlFor='fileInput'></label>
                    <i className="writeIcon fas fa-plus"></i>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                    <input type="text" placeholder='Title' className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>

                </div>
            <button className="writeSubmit">Publish</button>
            </form>

        </div>
    )
}