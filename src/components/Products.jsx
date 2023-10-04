import { AddToCartIcon } from './Icons';


export function Products({ products }) {

    return (
        <main className=' w-full'>
            <h1>Estos son los prouctos</h1>
            <ul className="gap-10 w-2/4 m-auto"  style={{ display: 'grid', 'grid-template-columns': 'repeat(auto-fit, minmax(200px , 1fr))' }}>
                {products.map(product => (
                    <li
                        className="border-2 border-white bg-neutral-900 flex flex-col items-center rounded-xl p-2"
                        key={product.id}
                    >
                        
                        <img
                            src ={product.thumbnail}
                            alt={product.title}
                            className="h-28 w-auto aspect-video object-cover mb-4"
                        />
                        <div className='mb-4'>
                            <strong>{product.title}</strong> - <strong>{product.price}$</strong>
                        </div>
                        <div className=" p-1 bg-neutral-700 rounded-md">
                            <AddToCartIcon className="text-white" />

                        </div>
                    </li>
                ))} 

            </ul>
            
        </main>
    )
}