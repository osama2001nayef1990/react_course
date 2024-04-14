import './post.css';
export default function Post({title='Default Post',bodey='Hello World!!'}){
    return (
        <div className='post'>
            <h2>{title}</h2>
            <hr/>
            <p>{bodey}</p>
        </div>
    )
}