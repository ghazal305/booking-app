import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addBooking } from "../../store/bookingsSlice";

const BookHotel = () => {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { hotelDetails } = useSelector((state) => state.hotelDetails);
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [bookingDates, setBookingDates] = useState({
    from: "",
    to: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // Set user data in form when component mounts
  useEffect(() => {
    if (user) {
      setValue("name", user.name || "");
      setValue("email", user.email || "");
      setValue("phone", user.phone || "");
      setValue("country", user.country || "");
    }
  }, [user, setValue]);

  const calculateTotalPrice = () => {
    if (!hotelDetails?.price || !bookingDates.from || !bookingDates.to) return 0;
    
    const fromDate = new Date(bookingDates.from);
    const toDate = new Date(bookingDates.to);
    const daysDiff = Math.ceil((toDate - fromDate) / (1000 * 60 * 60 * 24));
    
    return hotelDetails.price * daysDiff;
  };

  const onSubmit = (data) => {
    if (!bookingDates.from || !bookingDates.to) {
      alert("Please select check-in and check-out dates");
      return;
    }

    const booking = {
      id: Date.now(),
      hotelId,
      hotelName: hotelDetails?.name,
      hotelImage: hotelDetails?.image,
      userDetails: data,
      dates: bookingDates,
      totalPrice: calculateTotalPrice(),
      bookingDate: new Date().toISOString(),
    };

    dispatch(addBooking(booking));
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      navigate("/my-bookings");
    }, 3000);
  };

  const cardNumberValidation = (value) => {
    const cardRegex = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    return cardRegex.test(value) || "Please enter a valid 16-digit card number";
  };

  if (!hotelDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-6">Book Hotel</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* User Details Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">User Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <input
                        {...register("phone", { 
                          required: "Phone is required",
                          pattern: {
                            value: /^\d{1,12}$/,
                            message: "Phone must be numbers only, max 12 digits"
                          }
                        })}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Country *</label>
                      <select
                        {...register("country", { required: "Country is required" })}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        <option value="">Select Country</option>
                        <option value="US">United States</option>
                        <option value="MA">Morocco</option>
                        <option value="EG">Egypt</option>
                        <option value="GR">Greece</option>
                      </select>
                      {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                    </div>
                  </div>
                </div>

                {/* Payment Details Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Payment Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Card Number *</label>
                      <input
                        {...register("cardNumber", { 
                          required: "Card number is required",
                          validate: cardNumberValidation
                        })}
                        placeholder="1234 5678 9012 3456"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Cardholder Name *</label>
                      <input
                        {...register("cardholderName", { required: "Cardholder name is required" })}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      {errors.cardholderName && <p className="text-red-500 text-sm mt-1">{errors.cardholderName.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Expiry Date *</label>
                      <input
                        {...register("expiryDate", { 
                          required: "Expiry date is required",
                          pattern: {
                            value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                            message: "Format: MM/YY"
                          }
                        })}
                        placeholder="MM/YY"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate.message}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV *</label>
                      <input
                        {...register("cvv", { 
                          required: "CVV is required",
                          pattern: {
                            value: /^\d{3,4}$/,
                            message: "CVV must be 3-4 digits"
                          }
                        })}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv.message}</p>}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Pay Now
                </button>
              </form>
            </div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={hotelDetails.image} 
                    alt={hotelDetails.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{hotelDetails.name}</h4>
                    <p className="text-sm text-gray-600">{hotelDetails.location}</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Check-in:</span>
                    <input
                      type="date"
                      value={bookingDates.from}
                      onChange={(e) => setBookingDates(prev => ({ ...prev, from: e.target.value }))}
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Check-out:</span>
                    <input
                      type="date"
                      value={bookingDates.to}
                      onChange={(e) => setBookingDates(prev => ({ ...prev, to: e.target.value }))}
                      className="border border-gray-300 rounded px-2 py-1"
                    />
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Price per night:</span>
                    <span>${hotelDetails.price || 0}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Number of nights:</span>
                    <span>
                      {bookingDates.from && bookingDates.to 
                        ? Math.ceil((new Date(bookingDates.to) - new Date(bookingDates.from)) / (1000 * 60 * 60 * 24))
                        : 0
                      }
                    </span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg border-t pt-2">
                    <span>Total Price:</span>
                    <span>${calculateTotalPrice()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 text-center">
            <div className="text-green-500 text-6xl mb-4">✓</div>
            <h3 className="text-xl font-semibold mb-2">Booking Successful!</h3>
            <p className="text-gray-600">Your hotel has been booked successfully. Redirecting to My Bookings...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookHotel; 