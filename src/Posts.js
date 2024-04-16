import Post from "./post";
export default function Posts(){
    return(
        <div style={{width: '500px',}}>
          <Post title='Tarmeez Academy' bodey="This is the first paragraph"/>
          <Post title='Seconed' bodey="Seconed paragraph"/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>
    );
}