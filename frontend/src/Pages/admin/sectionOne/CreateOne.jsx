import '../../../css/admin.css'

function CreateOne() {


    return (
        <>
            <div className="py-5 mx-auto" style={{ width: '80%' }}>
                <div className="mt-5 mb-2 py-2 px-2 rounded" style={{ backgroundColor: '#eee' }}>
                    <h4 className="mt-2 p-0 text-center">Create </h4>
          
                    <form  method="post" encType='multipart/form-data' className="w-50 mx-auto border p-2">
                        <div className="form-outline mb-2">
                            <input type="text" id="category-name" className="form-control rounded-1" placeholder="Category x"  />
                        </div>
                        <div className="mb-2">
                            <input type="file" id="category-image" className="form-control rounded-1"  />
                        </div>
                        <button type="submit" className="btn btn-primary rounded-1">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateOne