import React from 'react'

function Footer() {
  return (
    <>
         <footer class="bg-[#805aed] py-8 mt-20">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-4 gap-8">
                <div>
                    <h3 class="text-lg font-semibold mb-4 text-white">Company</h3>
                    <ul>
                        <li class="mb-2"><a href="#" class="hover:underline text-white">About Us</a></li>
                        <li class="mb-2"><a href="#" class="hover:underline text-white">Our Services</a></li>
                        <li class="mb-2"><a href="#" class="hover:underline text-white">Privacy Policy</a></li>
                        <li class="mb-2"><a href="#" class="hover:underline text-white">Affiliate Program</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4 text-white">Get Help</h3>
                    <ul>
                        <li class="mb-2"><a href="#" class="hover:underline text-white">FAQ</a></li>
                        <li class="mb-2"><a href="#" class="hover:underline text-white">Shipping</a></li>
                        <li class="mb-2"><a href="#" class="hover:underline text-white">Returns</a></li>
                        <li class="mb-2"><a href="#" class="hover:underline text-white">Order Status</a></li>
                        <li class="mb-2"><a href="#" class="hover:underline text-white">Payment Options</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4 text-white">Online Shop</h3>
                    <ul>
                        <li class="mb-2"><a href="#" class="hover:underline text-white">Watch</a></li>
                        <li class="mb-2"><a href="#" class="hover:underline text-white">Bag</a></li>
                        <li class="mb-2"><a href="#" class="hover:underline text-white">Shoes</a></li>
                        <li class="mb-2"><a href="#" class="hover:underline text-white">Dress</a></li>
                    </ul>
                </div>
                <div> 
                    <h3 class="text-lg font-semibold mb-4 text-white">Follow Us</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="text-white hover:text-white"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="text-white hover:text-white"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-white hover:text-white"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-white hover:text-white"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer