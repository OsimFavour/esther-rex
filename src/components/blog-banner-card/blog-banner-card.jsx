import { Link } from 'react-router-dom'

const BlogBannerCard = () => {
  return (
    <div class="card">
        <div class="card-header text-center">
            <h5 class="card-title">Voluptates Corporis Placeat</h5> 
            <small class="small text-muted">January 24 2019</small>
        </div>
        <div class="card-body">
            <div class="blog-media">
                <img src='https://i.ibb.co/Jj3sYjs/blog-6.jpg' alt="" class="w-100"/>
                <Link to="#" class="badge badge-primary">#Salute</Link>     
            </div>  
            <p class="my-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos saepe dolores et nostrum porro odit reprehenderit animi, est ratione fugit aspernatur ipsum. Nostrum placeat hic saepe voluptatum dicta ipsum beatae.</p>
        </div>
        
        <div class="card-footer d-flex justify-content-between align-items-center flex-basis-0">
            <button class="btn btn-primary circle-35 mr-4"><i class="ti-back-right"></i></button>
            <Link to="single-post.html" class="btn btn-outline-dark btn-sm">READ MORE</Link>
            <Link to="#" class="text-dark small text-muted">By : Dr Esther Rex</Link>
        </div>                  
    </div>
  )
}

export default BlogBannerCard