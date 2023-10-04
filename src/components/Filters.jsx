export function Filters(){
    return(
        <section>
            <label htmlFor="price">Precio</label>
            <input type="range"
            id="price"
            min='0'
            max='1000'
            
            />
        </section>
    )
}