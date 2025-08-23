import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NairaSymbol, { formatNaira } from '../components/NairaSymbol';

const Payment = () => {
  const [bookingData, setBookingData] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Sample room data (in a real app, this would come from your database)
  const roomOptions = [
    { id: 1, name: 'Executive Suite', price: 85000 },
    { id: 2, name: 'Presidential Suite', price: 175000 },
    { id: 3, name: 'Deluxe Room', price: 55000 },
    { id: 4, name: 'Ocean View Room', price: 70000 },
    { id: 5, name: 'Family Suite', price: 100000 }
  ];

  useEffect(() => {
    // In a real application, you would get this data from your state management or API
    if (location.state && location.state.bookingData) {
      setBookingData(location.state.bookingData);
    } else {
      // Sample data for demonstration
      setBookingData({
        roomType: '3',
        checkIn: '2023-12-15',
        checkOut: '2023-12-18',
        guests: 2,
        price: 165000,
        room: roomOptions.find(room => room.id === 3)
      });
    }
  }, [location]);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment successful! Your booking has been confirmed.');
      navigate('/booking-confirmation', { state: { bookingData } });
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getNights = () => {
    if (!bookingData?.checkIn || !bookingData?.checkOut) return 0;
    const checkInDate = new Date(bookingData.checkIn);
    const checkOutDate = new Date(bookingData.checkOut);
    return Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
  };

  if (!bookingData) {
    return (
      <section className="py-16 bg-cream min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mx-auto"></div>
          <p className="mt-4 text-dark-blue">Loading booking details...</p>
        </div>
      </section>
    );
  }

  const selectedRoom = roomOptions.find(room => room.id === parseInt(bookingData.roomType)) || bookingData.room;

  return (
    <section className="py-16 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue">Complete Your Booking</h2>
          <p className="text-lg text-gray-600 mt-4">
            Review your details and choose a payment method
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full">
              <h3 className="text-xl font-semibold text-dark-blue mb-4 border-b pb-2">Booking Summary</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-dark-blue">Room Details</h4>
                  <p className="text-gray-600">{selectedRoom.name}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-dark-blue">Check-in</h4>
                  <p className="text-gray-600">{new Date(bookingData.checkIn).toLocaleDateString('en-NG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-dark-blue">Check-out</h4>
                  <p className="text-gray-600">{new Date(bookingData.checkOut).toLocaleDateString('en-NG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-dark-blue">Duration</h4>
                  <p className="text-gray-600">{getNights()} night{getNights() !== 1 ? 's' : ''}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-dark-blue">Guests</h4>
                  <p className="text-gray-600">{bookingData.guests} {bookingData.guests === 1 ? 'Guest' : 'Guests'}</p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-dark-blue">Total Amount:</span>
                    <span className="font-bold text-gold text-xl">{formatNaira(bookingData.price)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold text-dark-blue mb-6">Payment Method</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border rounded-lg text-center transition-colors ${
                    paymentMethod === 'card' 
                      ? 'border-gold bg-gold bg-opacity-10' 
                      : 'border-gray-300 hover:border-gold'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-dark-blue mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="font-medium">Credit/Debit Card</span>
                  </div>
                </button>
                
                <button
                  type="button"
                  onClick={() => setPaymentMethod('bank')}
                  className={`p-4 border rounded-lg text-center transition-colors ${
                    paymentMethod === 'bank' 
                      ? 'border-gold bg-gold bg-opacity-10' 
                      : 'border-gray-300 hover:border-gold'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-dark-blue mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="font-medium">Bank Transfer</span>
                  </div>
                </button>
              </div>
              
              {paymentMethod === 'card' ? (
                <form onSubmit={handlePaymentSubmit}>
                  <div className="mb-6">
                    <label className="block text-dark-blue font-medium mb-2">Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={cardDetails.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-dark-blue font-medium mb-2">Expiry Date</label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={cardDetails.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-dark-blue font-medium mb-2">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        value={cardDetails.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <label className="block text-dark-blue font-medium mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      name="cardName"
                      value={cardDetails.cardName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-gold text-dark-blue py-3 rounded-md font-semibold hover:bg-opacity-90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isProcessing ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing Payment...
                      </>
                    ) : (
                      `Pay ${formatNaira(bookingData.price)}`
                    )}
                  </button>
                </form>
              ) : (
                <div className="bank-transfer-details">
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-dark-blue mb-4">Bank Transfer Instructions</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bank Name:</span>
                        <span className="font-medium">ABC Bank NG</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Name:</span>
                        <span className="font-medium">Brava Hotels Ltd.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Account Number:</span>
                        <span className="font-medium">0123456789</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-medium text-gold">{formatNaira(bookingData.price)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    Please transfer the exact amount to the account details above. Your booking will be confirmed once we receive the payment. This may take up to 24 hours.
                  </p>
                  
                  <div className="mb-6">
                    <label className="block text-dark-blue font-medium mb-2">Upload Payment Proof (Optional)</label>
                    <input
                      type="file"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => alert('Thank you! We will confirm your booking once payment is received.')}
                    className="w-full bg-gold text-dark-blue py-3 rounded-md font-semibold hover:bg-opacity-90 transition duration-300"
                  >
                    I've Made the Transfer
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;