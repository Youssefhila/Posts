async function getPosts() {
    const res = await fetch('https://jsonplaceholder.org/posts', {
      next: {
        revalidate: 0 
      }
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return res.json()
  }
  
  export default async function Posts() {
    const posts = await getPosts()

    return (
      <>
        {posts.map((post) => (
          <div key={post.id} >
            <h3>{post.title}</h3>
          </div>
        ))}
        {posts.length === 0 && (
          <p>There are no post!</p>
        )}
      </>
    )
   
  }