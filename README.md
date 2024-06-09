# 86 Canvas, A Photographer Portfolio Website

A full-stack, mobile-responsive website enabling users to book photographers for various occasions based on available schedule slots. Additionally, users can purchase popular canvases from the photographers.

## Technologies Used

- **Frontend:** React, Redux, HTML, CSS, Javascript, React Spinner, Toastify, Swiper, Font Awesome, 
- **Backend:** Node.js, Express, MongoDB, Firebase
- **Authentication:** JWT Token
- **State Management:** RTK Query, Redux

## Features

### Advanced Booking System

- **Complex Booking Functionality:** Allows users to book photographers for specific time slots.
- **Booking Management:** Users can cancel, confirm, or check their booking status via the user dashboard.

### Dynamic Scheduling

- **Three Daily Schedules:** Morning, afternoon, and night slots available every day.
- **Slot Reservation:** Once a user books a photographer for a specific period, that slot is reserved and unavailable to others until the user cancels the booking, ensuring no double bookings. This is managed globally through the MongoDB database.

### User Dashboard

- **Mobile-Friendly Design:** Users can edit profiles, check booking statuses, and manage their carts.
- **Interactive Interface:** Designed for ease of use on both mobile and desktop devices.

### State Management

- **Data Fetching and Storage:** Utilized RTK Query for efficient data fetching and storage in MongoDB.
- **Action Management:** Redux is used for managing actions such as opening modals and displaying cart/booking icons.

### Live Site

Explore the live site [here](https://photographer-portfolio-website-advance.vercel.app/).

### Repository

Github Client Repository : [here](https://github.com/rasel-gannicus/A-Photographer-s-Website-with-E-commerce-and-Portfolio).

Github Server Repository : [here](https://github.com/rasel-gannicus/server-for-Photographer-portfolio-website).

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Firebase account for authentication

## Setting Up Locally

### Frontend

To set up the frontend locally, follow these steps:

1. Clone the repository:

   ```bash
      git clone https://github.com/rasel-gannicus/A-Photographer-Booking-Website-.git

   ```

2. Navigate to the project directory:

   ```bash
      cd photographer-booking-website
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:
   Create a .env file in the root directory and add the necessary environment variables (e.g., MongoDB URI, Firebase credentials, JWT secret).

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Access the application at `http://localhost:3000` in your web browser.

### Backend

To set up the backend locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone
   ```

2. Navigate to the project directory:

   ```bash
   cd 'folder directory name'


   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure the `.env` file with your personal settings.

5. Start the server:

   ```bash
   node index.js
   ```

6. The backend server will start running at the specified `http://localhost:5002`.

### Usage

- **Booking a Photographer:** Navigate to the booking section, select a time slot, and confirm the booking.
- **Managing Bookings:** Access the user dashboard to view, confirm, or cancel bookings.
- **Purchasing Canvases:** Browse and purchase canvases from the photographer's collection.

## Contributing

We welcome contributions to improve the project. Please fork the repository and submit pull requests with your enhancements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
