const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
   {
      name: 'Miyah Myles',
      position: 'Marketing',
      photo: './assets/img/avatar-01.png',
      text: " Working with Aemsiricode was a fantastic experience. They took our ideas and turned them into a stunning, user-friendly website. They really listened to our needs and delivered beyond our expectations."
   },{
      name: 'Jamie Reynolds',
      position: 'Business Owner',
      photo: './assets/img/avatar-02.png',
      text: "Aemsiricode didn't just build us a website—they helped our business grow. Their professional design and intuitive user experience made it easier for our customers to interact with us."
   },{
      name: 'Morgan Hayes',
      position: 'Project Manager',
      photo: './assets/img/avatar-03.png',
      text: 'We’ve worked with Aemsiricode on several major projects, and they’ve consistently delivered on time and with great attention to detail. Their insights were invaluable at every stage of the website development process.'
   }
]

let idx = 1

function updateTestimonial(){
   const { name, position, photo, text} = testimonials[idx]

   testimonial.innerHTML = text
   userImage.src = photo
   username.innerHTML = name
   role.innerHTML = position

   idx++

   if(idx > testimonials.length -1){
      idx = 0
   }
}

setInterval(updateTestimonial, 8000)