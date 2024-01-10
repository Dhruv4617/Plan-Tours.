import Card from "./Card";

function Tours({tours,removeTour}) {
    return(<div className='cointainer'>
        <div>

        <h2 className="title">Plan Tours</h2>
        </div>
        <div className='cards'>
            {
                tours.map( (tour) => {
                    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                        
                    

                })
            }
        </div>
    </div>
       
         
    );
}
export default Tours;