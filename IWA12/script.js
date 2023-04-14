// const STATUS_MAP = {
//     shelf: {
//         color: 'green',
//         canReserve: true,
//         canCheckout: true,
//         canCheckIn: false,
//     },
//     reserved: {
//         color: 'blue',
//         canReserve: false,
//         canCheckout: true,
//         canCheckIn: false,
//     },
//     overdue: {
//         color: 'red',
//         canReserve: false,
//         canCheckout: false,
//         canCheckIn: true,
//     },
//     checkedOut: {
//         color: 'orange',
//         canReserve: false,
//         canCheckout: false,
//         canCheckIn: true,
//     }
// }

// // Edit below line 

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// checkin.0.color = none
// status.0.style.color = STATUS_MAP.status.color
// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'


 

// check
// scripts.js

const STATUS_MAP = {
    shelf: {
      color: 'green',
      canReserve: true,
      canCheckout: true,
      canCheckIn: false,
    },
    reserved: {
      color: 'blue',
      canReserve: false,
      canCheckout: true,
      canCheckIn: false,
    },
    overdue: {
      color: 'red',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
    },
    checkedOut: {
      color: 'orange',
      canReserve: false,
      canCheckout: false,
      canCheckIn: true,
    }
  };
  
  // Get all the book containers
  const bookContainers = document.querySelectorAll('div[id^="book"]');
  
  // Loop through the book containers
  bookContainers.forEach(container => {
    // Get the relevant elements in the container
    const status = container.querySelector('.status');
    const reserve = container.querySelector('.reserve');
    const checkout = container.querySelector('.checkout');
    const checkin = container.querySelector('.checkin');
    
    // Get the status of the book
    const bookStatus = status.textContent.trim();
    
    // Get the corresponding status object from the STATUS_MAP
    const statusObj = STATUS_MAP[bookStatus];
    
    // Set the color of the status text
    status.style.color = statusObj.color;
    
    // Enable/disable buttons based on the status
    reserve.disabled = !statusObj.canReserve;
    checkout.disabled = !statusObj.canCheckout;
    checkin.disabled = !statusObj.canCheckIn;
    
    // Set the color of the buttons to black and grayscale
    reserve.style.color = reserve.disabled ? 'gray' : 'black';
    checkout.style.color = checkout.disabled ? 'gray' : 'black';
    checkin.style.color = checkin.disabled ? 'gray' : 'black';
  });
  