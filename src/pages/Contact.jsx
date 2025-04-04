import React, { useState } from "react";
import Hero from "../components/Hero";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    placeType: "tourist-attraction",
    placeName: "",
    placeLocation: "",
    description: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (formData.phone.trim() && !/^\d{10}$/.test(formData.phone.replace(/[- ]/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.placeName.trim()) {
      newErrors.placeName = "Place name is required";
    }
    
    if (!formData.placeLocation.trim()) {
      newErrors.placeLocation = "Location is required";
    }
    
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        placeType: "tourist-attraction",
        placeName: "",
        placeLocation: "",
        description: ""
      });
      
      // Reset submission status after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Hero
        title="Contact Us"
        subtitle="Submit your business listing or get in touch with our team"
        backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1000"
        height="h-[50vh]"
      />

      <div className="page-container py-16 relative -mt-16 z-10">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-deep-blue to-deep-blue/80 text-white p-8">
              <h2 className="text-2xl font-serif font-bold mb-6 text-gold">
                Get In Touch
              </h2>
              <p className="mb-8 text-gray-200">
                Have a question or want to submit a listing? We're here to help. Fill out the form or contact us directly.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={20} className="mr-4 text-gold mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-gray-200 text-sm">
                      Kanpur Tourism Office<br />
                      Mall Road, Kanpur<br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={20} className="mr-4 text-gold mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href="mailto:info@kanpurbhraman.com" className="text-gray-200 text-sm hover:text-gold transition-colors">
                      info@kanpurbhraman.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={20} className="mr-4 text-gold mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a href="tel:+919876543210" className="text-gray-200 text-sm hover:text-gold transition-colors">
                      +91 987-654-3210
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-medium mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8 lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold mb-6 text-deep-blue">
                Submit Your Listing
              </h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center">
                  <CheckCircle className="text-green-500 mr-4" size={24} />
                  <div>
                    <h3 className="text-green-800 font-medium mb-1">Thank You!</h3>
                    <p className="text-green-700">
                      Your listing has been submitted successfully. Our team will review it and get back to you soon.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-dark-brown font-medium mb-1">
                        Your Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.name ? "border-red-400 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-dark-brown font-medium mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.email ? "border-red-400 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-dark-brown font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.phone ? "border-red-400 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                  
                  {/* Place Info */}
                  <div>
                    <label htmlFor="placeType" className="block text-dark-brown font-medium mb-1">
                      Type of Place*
                    </label>
                    <select
                      id="placeType"
                      name="placeType"
                      value={formData.placeType}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
                    >
                      <option value="tourist-attraction">Tourist Attraction</option>
                      <option value="historical-site">Historical Site</option>
                      <option value="religious-place">Religious Place</option>
                      <option value="hotel">Hotel / Accommodation</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="shopping">Shopping</option>
                      <option value="event">Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="placeName" className="block text-dark-brown font-medium mb-1">
                        Name of Place/Business*
                      </label>
                      <input
                        type="text"
                        id="placeName"
                        name="placeName"
                        value={formData.placeName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.placeName ? "border-red-400 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                        }`}
                      />
                      {errors.placeName && (
                        <p className="text-red-500 text-sm mt-1">{errors.placeName}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="placeLocation" className="block text-dark-brown font-medium mb-1">
                        Location*
                      </label>
                      <input
                        type="text"
                        id="placeLocation"
                        name="placeLocation"
                        value={formData.placeLocation}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                          errors.placeLocation ? "border-red-400 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                        }`}
                      />
                      {errors.placeLocation && (
                        <p className="text-red-500 text-sm mt-1">{errors.placeLocation}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="description" className="block text-dark-brown font-medium mb-1">
                      Description*
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                        errors.description ? "border-red-400 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
                      }`}
                      placeholder="Tell us about your place or event..."
                    ></textarea>
                    {errors.description && (
                      <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                    )}
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-deep-blue text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" /> Submit Listing
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <section className="pb-16">
        <div className="page-container">
          <h2 className="text-2xl font-serif font-bold mb-6 text-deep-blue">
            Find Us
          </h2>
          
          <div className="h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114577.61246467277!2d80.24177520878337!3d26.453339646725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1649418128389!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Kanpur Map"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 