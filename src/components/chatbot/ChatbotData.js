export const initialMessages = [
  { text: "Welcome! How can I assist you today?", user: "bot" },
];

export const simulateBotResponse = (userInput) => {
  if (userInput.toLowerCase().includes("hello")) {
    return "Hello! How can I assist you today?";
  } else if (userInput.toLowerCase().includes("bus ticket")) {
    return "Sure, I can help you book a bus ticket. Please provide your destination and date of travel.";
  } else if (userInput.toLowerCase().includes("phone number")) {
    return "Sure, our agency phone number is +3559094490932. Please feel free to call anytime from 9 AM to 9 PM, Monday to Friday.";
  } else if (userInput.toLowerCase().includes("thank you")) {
    return "You're welcome! Please don't hesitate to reach out if you have any questions regarding your booking or our agency's services.";
  } else if (userInput.toLowerCase().includes("departure times")) {
    return "Departure times from Tirana for our buses range from 6:00 AM for the first departure to 6:00 PM for the last one. Please note that these times may change over time, so be sure to check the official schedule on our mobile app for the most up-to-date information.";
  } else if (userInput.toLowerCase().includes("ticket prices")) {
    return "Ticket prices vary depending on the route and class of service. You can find the most accurate pricing information on our website or mobile app. Keep in mind that prices may change, so it's a good idea to check right before booking.";
  } else if (userInput.toLowerCase().includes("baggage policy")) {
    return "Our baggage policy allows each passenger to bring one piece of checked baggage and one carry-on bag. Additional baggage may incur extra charges. Make sure your baggage adheres to size and weight limits. Check our website for detailed information.";
  } else if (userInput.toLowerCase().includes("group discounts")) {
    return "We offer group discounts for parties of 10 or more. Please contact our customer support or visit our website for more information on group rates and how to book as a group.";
  } else if (userInput.toLowerCase().includes("cancel reservation")) {
    return "You can cancel your reservation up to 24 hours before your scheduled departure for a full refund. After that, there may be cancellation fees. Log in to your account on our website or contact our customer support for assistance with cancellations.";
  } else if (userInput.toLowerCase().includes("lost and found")) {
    return "If you've lost an item on one of our buses, please contact our lost and found department at [email address] or call [phone number]. Be sure to provide a detailed description of the lost item to help us locate it.";
  } else if (userInput.toLowerCase().includes("travel insurance")) {
    return "We offer optional travel insurance to cover unexpected events. You can add it to your booking during the reservation process on our website or mobile app. It provides coverage for cancellations, delays, and more.";
  } else if (userInput.toLowerCase().includes("bus routes")) {
    return "We have a variety of bus routes to different destinations. Please visit our website or mobile app to view our route map, schedules, and availability for your desired destination.";
  } else if (userInput.toLowerCase().includes("child fares")) {
    return "Child fares are available for passengers under the age of 12. The specific discount and age criteria may vary depending on the route. You can find child fare information on our website or inquire with our customer support.";
  } else if (userInput.toLowerCase().includes("special needs assistance")) {
    return "We provide special assistance for passengers with disabilities or special needs. Please let us know your requirements at the time of booking, and our staff will be happy to assist you.";
  } else if (userInput.toLowerCase().includes("senior citizen discounts")) {
    return "We offer senior citizen discounts for passengers aged 65 and above. The discount amount and eligibility criteria may vary by route. Please check our website or contact our customer support for details.";
  } else if (userInput.toLowerCase().includes("bus station address")) {
    return "Our bus station in Tirana is located at [address]. Please visit our website or use our mobile app for more detailed directions and a map to the station.";
  } else if (userInput.toLowerCase().includes("Wi-Fi availability")) {
    return "Wi-Fi is available on most of our buses. However, it's always a good idea to check the specific bus's amenities when making your reservation, as not all buses may have Wi-Fi.";
  } else if (userInput.toLowerCase().includes("pet policy")) {
    return "Pets are generally not allowed on our buses, except for certified service animals. Please check our website for details on our pet policy and any exceptions that may apply.";
  } else if (userInput.toLowerCase().includes("booking changes")) {
    return "You can make changes to your booking up to 24 hours before your departure time. Log in to your account on our website or contact our customer support for assistance with any changes.";
  } else if (userInput.toLowerCase().includes("loyalty program")) {
    return "We offer a loyalty program for frequent travelers. You can earn points for each trip and redeem them for discounts or other benefits. Visit our website to learn more about how to join and the rewards offered.";
  } else if (userInput.toLowerCase().includes("bus arrival status")) {
    return "You can check the real-time arrival status of your bus on our website or mobile app. Just enter your booking details or bus number, and you'll get the latest information on its arrival time.";
  } else if (userInput.toLowerCase().includes("travel advisories")) {
    return "For travel advisories, such as road closures, delays, or weather-related issues, please visit our website or follow our social media channels for the most current updates affecting our bus services.";
  } else if (userInput.toLowerCase().includes("complaints and feedback")) {
    return "If you have a complaint or feedback to share, please reach out to our customer support. You can also use the feedback form on our website to help us improve our services based on your suggestions.";
  } else if (userInput.toLowerCase().includes("child safety seats")) {
    return "Child safety seats are available on some of our buses, depending on the route. Please check our website or contact our customer support to inquire about the availability of child safety seats for your specific trip.";
  } else if (userInput.toLowerCase().includes("bus amenities")) {
    return "Our buses offer a range of amenities, including comfortable seating, air conditioning, restrooms, power outlets, and more. The specific amenities may vary by route, so please check the details when making your reservation.";
  } else if (userInput.toLowerCase().includes("meal options")) {
    return "We offer meal options on select routes. Please check our website or contact our customer support to see if meal service is available for your specific trip and what options are provided.";
  } else if (userInput.toLowerCase().includes("bus tracking")) {
    return "You can track your bus in real-time using our mobile app or website. Just enter your booking details or bus number to get accurate location updates as your trip progresses.";
  } else if (userInput.toLowerCase().includes("student discounts")) {
    return "Student discounts may be available for passengers with a valid student ID. The discount amount and eligibility criteria may vary by route. Please check our website or contact our customer support for details.";
  } else if (userInput.toLowerCase().includes("in-seat entertainment")) {
    return "Some of our buses offer in-seat entertainment systems. Check the amenities section on our website or mobile app when making your reservation to see if this feature is available on your chosen route.";
  } else if (userInput.toLowerCase().includes("rewards program")) {
    return "We have a rewards program for our loyal customers. You can earn points with each booking and redeem them for discounts, free trips, or other rewards. Visit our website to sign up and learn more about the program.";
  } else if (userInput.toLowerCase().includes("bus stations in [city]")) {
    return "We have multiple bus stations in [city]. The exact locations and addresses can be found on our website. Make sure to select your preferred station when booking your ticket.";
  } else if (userInput.toLowerCase().includes("bus delays")) {
    return "Bus delays can happen due to various reasons, including traffic and weather. You can check the real-time status of your bus on our website or contact our customer support for the latest information on any delays.";
  } else if (userInput.toLowerCase().includes("online booking process")) {
    return "Our online booking process is user-friendly. Simply visit our website, select your departure and destination, choose your travel date, and follow the steps to complete your reservation. If you encounter any issues, feel free to reach out to our customer support for assistance.";
  } else if (
    userInput.toLowerCase().includes("child identification requirements")
  ) {
    return "Children under a certain age may need to provide identification when traveling. Check our website for specific age and ID requirements to ensure a smooth journey with your child.";
  } else if (userInput.toLowerCase().includes("boarding process")) {
    return "Our boarding process is straightforward. Please arrive at the bus station at least 30 minutes before departure, present your ticket or booking confirmation, and follow the instructions of our staff for a smooth boarding experience.";
  } else if (userInput.toLowerCase().includes("payment methods")) {
    return "We accept a variety of payment methods, including credit cards, debit cards, PayPal, and more. You can see the full list of accepted payment options during the booking process on our website.";
  } else if (userInput.toLowerCase().includes("refund policy")) {
    return "Our refund policy allows for cancellations with a full refund up to 24 hours before your scheduled departure. After that, there may be cancellation fees. For detailed information on our refund policy, please visit our website.";
  } else if (userInput.toLowerCase().includes("bus cleanliness")) {
    return "We take pride in maintaining the cleanliness of our buses. Our cleaning staff ensures that buses are thoroughly cleaned and sanitized after each trip, providing a safe and comfortable environment for all passengers.";
  } else if (userInput.toLowerCase().includes("check-in process")) {
    return "There is no traditional check-in process for our bus services. Simply arrive at the bus station, present your ticket or booking confirmation, and follow our staff's guidance for boarding.";
  } else if (userInput.toLowerCase().includes("travel with pets")) {
    return "In general, pets are not allowed on our buses except for certified service animals. Please refer to our pet policy on our website for specific guidelines and any exceptions that may apply.";
  } else if (userInput.toLowerCase().includes("discount codes")) {
    return "We offer discount codes on occasion. To check for available discount codes and promotions, visit our website, subscribe to our newsletter, or follow us on social media for updates on special offers.";
  } else if (userInput.toLowerCase().includes("boarding pass")) {
    return "We don't issue boarding passes for our bus services. Simply present your ticket or booking confirmation at the bus station, and our staff will assist you with boarding.";
  } else if (userInput.toLowerCase().includes("lost ticket")) {
    return "If you've lost your ticket, please contact our customer support as soon as possible. They will assist you in recovering your booking information or issuing a replacement ticket.";
  } else if (userInput.toLowerCase().includes("overbooked buses")) {
    return "We do our best to avoid overbooked buses. In the rare event that a bus is overbooked, we will assist affected passengers in rescheduling their trip or provide compensation as per our overbooking policy.";
  } else if (userInput.toLowerCase().includes("bus driver qualifications")) {
    return "Our bus drivers are trained and certified professionals with the required licenses and experience. They prioritize passenger safety and follow strict safety guidelines throughout the journey.";
  } else if (userInput.toLowerCase().includes("loyalty card benefits")) {
    return "Our loyalty program offers benefits such as exclusive discounts, priority boarding, and the ability to earn free trips. To see the full list of benefits and eligibility criteria, visit our website or contact our customer support.";
  } else if (userInput.toLowerCase().includes("bus fleet details")) {
    return "Our bus fleet consists of modern, well-maintained vehicles with various amenities. For specific details on the bus fleet, including the age and features of our buses, please check our website.";
  } else if (userInput.toLowerCase().includes("unaccompanied minors")) {
    return "We have policies in place for unaccompanied minors traveling on our buses. Visit our website or contact our customer support for information on age restrictions and the required documentation for unaccompanied minor travel.";
  } else if (
    userInput.toLowerCase().includes("traveling with sports equipment")
  ) {
    return "We allow sports equipment such as bikes, golf clubs, and skis on our buses, subject to certain conditions. Please check our website for detailed guidelines and fees for transporting sports equipment.";
  } else if (userInput.toLowerCase().includes("bus station facilities")) {
    return "Our bus stations offer various facilities, including waiting areas, restrooms, and vending machines. The specific facilities may vary by location, so check our website or contact our customer support for details on the bus station you'll be using.";
  } else if (userInput.toLowerCase().includes("bus route changes")) {
    return "Bus route changes can occur due to road closures, construction, or other factors. If you're concerned about route changes affecting your trip, please reach out to our customer support for the most up-to-date information.";
  } else if (userInput.toLowerCase().includes("booking confirmation email")) {
    return "After completing your booking, you'll receive a booking confirmation email with all the details of your reservation. If you haven't received the email, please check your spam folder or contact our customer support for assistance.";
  } else if (userInput.toLowerCase().includes("bus seats availability")) {
    return "Bus seats are subject to availability and may vary based on the date and time of travel. To check seat availability for your desired departure, visit our website or mobile app and enter your travel details.";
  } else if (userInput.toLowerCase().includes("companion fares")) {
    return "We offer companion fares on select routes, allowing you to book two or more tickets at a discounted rate. For information on companion fare availability and eligibility, please visit our website or contact our customer support.";
  } else if (
    userInput.toLowerCase().includes("emergency contact information")
  ) {
    return "In case of emergencies during your journey, our buses are equipped with an emergency contact number. You can find this information on the safety card on the bus. Additionally, please inform our staff of any emergencies, and they will assist you.";
  } else if (userInput.toLowerCase().includes("traveling with infants")) {
    return "Infants can travel with you on our buses. However, you may need to bring your own infant car seat or restraint system. Please check our infant travel guidelines on our website for more details.";
  } else if (userInput.toLowerCase().includes("WiFi password")) {
    return "For buses with Wi-Fi, the Wi-Fi password can be found on board. Our staff will be happy to assist you in connecting to the Wi-Fi network during your trip.";
  } else if (
    userInput.toLowerCase().includes("senior citizen identification")
  ) {
    return "For senior citizen discounts, you may be required to show identification, such as a valid senior citizen card or government-issued ID. Check our website for specific identification requirements for senior citizen fares.";
  } else if (userInput.toLowerCase().includes("service animal policies")) {
    return "We welcome certified service animals on our buses. Passengers traveling with service animals should have the necessary documentation, and the animals should be harnessed or leashed at all times.";
  } else if (userInput.toLowerCase().includes("bus schedule changes")) {
    return "Bus schedules may change due to various factors. To ensure you have the most up-to-date information, visit our website or use our mobile app to check the latest schedule for your specific route.";
  } else if (
    userInput.toLowerCase().includes("onboard entertainment options")
  ) {
    return "Some of our buses offer onboard entertainment options, such as movies or TV shows. Check the amenities section on our website or mobile app to see if this feature is available on your selected bus.";
  } else if (userInput.toLowerCase().includes("group booking process")) {
    return "For group bookings, please visit our website or contact our group booking department. They will assist you in reserving seats for your group and provide information on any available group discounts.";
  } else if (userInput.toLowerCase().includes("bus station parking")) {
    return "Many of our bus stations offer parking facilities. Visit our website or contact our customer support to find out if parking is available at the specific bus station you plan to use.";
  } else if (userInput.toLowerCase().includes("bus cleanliness protocols")) {
    return "We follow strict cleanliness protocols to ensure the safety and comfort of our passengers. Our buses are regularly cleaned and sanitized, and we take extra precautions to maintain a clean environment in light of current health concerns.";
  } else if (userInput.toLowerCase().includes("service disruptions")) {
    return "In the event of service disruptions, such as route closures or delays, we will notify affected passengers through various channels, including our website and customer support. You can also check for service alerts on our website or mobile app.";
  } else if (userInput.toLowerCase().includes("early arrivals")) {
    return "If your bus arrives at the destination ahead of schedule, we will follow standard procedures for disembarkation. You can check the real-time status of your bus on our website or mobile app to stay updated on its arrival time.";
  } else if (userInput.toLowerCase().includes("bus station hours")) {
    return "Bus station hours may vary by location. To find the operating hours of a specific bus station, visit our website or contact our customer support for detailed information.";
  } else if (userInput.toLowerCase().includes("baggage check-in process")) {
    return "When checking in your baggage, please arrive at the bus station early to allow time for processing. Our staff will assist you in weighing and tagging your baggage before it's loaded onto the bus.";
  } else if (userInput.toLowerCase().includes("bus fleet eco-friendliness")) {
    return "We prioritize eco-friendliness and maintain a fleet of modern buses with lower emissions. For more information on our efforts to reduce our environmental impact, please visit our website or read our sustainability reports.";
  } else if (userInput.toLowerCase().includes("bus station accessibility")) {
    return "We strive to make our bus stations accessible to all passengers. If you have specific accessibility requirements, please contact our customer support or the bus station you plan to use, and they will assist you with any accommodations needed.";
  } else if (userInput.toLowerCase().includes("bus driver assistance")) {
    return "Our bus drivers are trained to assist passengers with various needs. If you require special assistance during your journey, please inform our staff when boarding, and they will do their best to accommodate your requirements.";
  } else if (userInput.toLowerCase().includes("bus route maps")) {
    return "You can find route maps and schedules on our website or mobile app. These resources provide detailed information on the routes we offer, including stops and destinations.";
  } else if (userInput.toLowerCase().includes("online booking fees")) {
    return "Our online booking fees may vary depending on the route and the payment method used. To see the specific booking fees for your reservation, check the booking details on our website during the booking process.";
  } else if (
    userInput.toLowerCase().includes("bus seats for tall passengers")
  ) {
    return "Our buses offer comfortable seating for passengers of various sizes. If you have specific seating preferences, such as extra legroom or a front-row seat, you can make these selections during the booking process on our website.";
  } else if (userInput.toLowerCase().includes("bus temperature control")) {
    return "We maintain temperature-controlled environments on our buses. Our air conditioning and heating systems are adjusted to provide a comfortable atmosphere for all passengers during the journey.";
  } else if (userInput.toLowerCase().includes("bus station amenities")) {
    return "Our bus stations are equipped with amenities such as restrooms, waiting areas, and vending machines. The specific amenities may vary by location, so please check the details on our website or contact our customer support.";
  } else if (userInput.toLowerCase().includes("bus route stops")) {
    return "We have various stops along our bus routes. You can view the complete list of stops and their order on our website or mobile app to plan your journey and determine the best pickup and drop-off locations for your trip.";
  } else if (userInput.toLowerCase().includes("bus travel duration")) {
    return "The travel duration varies depending on the route and stops. To get an accurate estimate of how long your trip will take, please check the schedule on our website or mobile app, which provides estimated travel times for each leg of the journey.";
  } else if (userInput.toLowerCase().includes("bus station lockers")) {
    return "Some of our bus stations offer locker facilities for storing luggage and personal items. Visit our website or contact our customer support to find out if locker services are available at the specific bus station you plan to use.";
  } else if (userInput.toLowerCase().includes("bus accessibility features")) {
    return "We strive to make our buses accessible to all passengers. Many of our buses are equipped with features like ramps and designated seating for passengers with disabilities. If you have specific accessibility requirements, please let our staff know when booking your ticket.";
  } else if (userInput.toLowerCase().includes("bus passenger capacity")) {
    return "The passenger capacity of our buses varies by the type of vehicle. For the exact passenger capacity of the bus on your route, please check the vehicle details during the booking process on our website.";
  } else if (userInput.toLowerCase().includes("bus refreshments")) {
    return "Some of our buses offer refreshments for purchase during the journey. To check if refreshments are available on your selected route and the specific options provided, please refer to the amenities section when making your reservation.";
  } else if (userInput.toLowerCase().includes("bus travel restrictions")) {
    return "Travel restrictions, such as border crossings and document requirements, vary by route. To ensure a smooth journey, please check our website or contact our customer support for information on any travel restrictions that may apply to your trip.";
  } else if (userInput.toLowerCase().includes("bus tracking app")) {
    return "You can track your bus using our mobile app. It provides real-time location updates for your convenience. Download our app and enter your booking details or bus number to track your journey.";
  } else if (userInput.toLowerCase().includes("bus station shuttle service")) {
    return "Some of our bus stations offer shuttle services to and from nearby locations, such as airports or hotels. To check if shuttle services are available at the bus station you plan to use, visit our website or contact our customer support.";
  } else if (userInput.toLowerCase().includes("bus travel history")) {
    return "You can view your travel history, including previous bookings and trips, by logging in to your account on our website or mobile app. This feature allows you to keep track of your past journeys with us.";
  } else if (userInput.toLowerCase().includes("bus station security")) {
    return "Our bus stations have security measures in place to ensure the safety of passengers. Security personnel and surveillance systems are used to maintain a secure environment for everyone at the station.";
  } else if (userInput.toLowerCase().includes("bus stops en route")) {
    return "Our buses make stops at designated locations along the route. These stops are predetermined and can be found on our website or mobile app when you search for your specific route and schedule.";
  } else if (
    userInput.toLowerCase().includes("bus discounts for military personnel")
  ) {
    return "We offer discounts for military personnel and veterans on select routes. To learn about eligibility criteria and the discount amount, visit our website or contact our customer support for details.";
  } else if (userInput.toLowerCase().includes("bus driver breaks")) {
    return "Our bus drivers follow regulated working hours and rest breaks to ensure passenger safety. These breaks are scheduled during longer trips to provide the driver with adequate rest.";
  } else if (
    userInput.toLowerCase().includes("bus station facilities for children")
  ) {
    return "Our bus stations are equipped with family-friendly facilities, including restrooms suitable for children and waiting areas. We aim to provide a comfortable environment for families traveling with kids.";
  } else if (userInput.toLowerCase().includes("bus seating arrangements")) {
    return "Seating arrangements on our buses are designed to accommodate passengers of all types. You can choose your preferred seat during the booking process, including options for window or aisle seats, front or rear seating, and more.";
  } else if (
    userInput.toLowerCase().includes("bus station luggage storage fees")
  ) {
    return "If you need to store luggage at the bus station, there may be fees associated with locker or baggage storage services. Visit our website or contact the specific bus station you plan to use for information on storage fees.";
  } else if (userInput.toLowerCase().includes("bus facilities for seniors")) {
    return "We provide facilities for senior passengers, including priority boarding and seating assistance. If you have specific requirements, please let our staff know when boarding, and they will assist you.";
  } else if (userInput.toLowerCase().includes("bus driver communication")) {
    return "Our bus drivers are trained to provide important information during the journey, such as stops, arrival times, and safety instructions. They are available to assist passengers and answer questions during the trip.";
  } else if (
    userInput.toLowerCase().includes("bus station lost and found hours")
  ) {
    return "Our bus station's lost and found department is typically open during regular station hours. For detailed information on lost and found services and operating hours, contact the specific bus station you used.";
  } else if (userInput.toLowerCase().includes("bus restrooms")) {
    return "Many of our buses are equipped with restrooms for passenger convenience. The availability of restrooms depends on the bus type, so check the amenities section during the booking process to see if your selected bus has restroom facilities.";
  } else if (
    userInput.toLowerCase().includes("bus station car rental services")
  ) {
    return "Some of our bus stations offer car rental services in collaboration with rental agencies. Visit our website or contact the specific bus station you plan to use for information on car rental options.";
  } else if (userInput.toLowerCase().includes("bus ticket transferability")) {
    return "Bus tickets are generally non-transferable and should be used by the passenger named on the ticket. Attempting to transfer a ticket to another person may result in issues during boarding or travel.";
  } else if (userInput.toLowerCase().includes("bus station WiFi access")) {
    return "Many of our bus stations offer complimentary Wi-Fi access for passengers. To find out if Wi-Fi is available at the specific bus station you plan to use, visit our website or contact the station directly.";
  } else if (userInput.toLowerCase().includes("bus route alternatives")) {
    return "We offer multiple routes to popular destinations, providing passengers with flexibility. To explore route alternatives for your trip, visit our website or contact our customer support for suggestions based on your preferences.";
  } else if (userInput.toLowerCase().includes("bus station accommodations")) {
    return "Our bus stations are typically located near hotels and accommodations. If you need information on nearby lodging options, please contact the specific bus station you plan to use or visit our website for suggestions.";
  } else if (userInput.toLowerCase().includes("bus ticket gift cards")) {
    return "We offer gift cards that can be used to purchase bus tickets. These make great gifts for friends and family. You can purchase gift cards on our website and redeem them during the booking process.";
  } else if (userInput.toLowerCase().includes("bus pet travel options")) {
    return "While pets are generally not allowed on our buses, there may be exceptions for small pets in carriers. Contact our customer support or refer to our pet policy on our website for details on pet travel options.";
  } else if (
    userInput.toLowerCase().includes("bus station transportation services")
  ) {
    return "Some of our bus stations offer transportation services to and from the station. This can include shuttles, taxis, or other transport options. Check our website or contact the specific bus station you plan to use for details on transportation services.";
  } else if (userInput.toLowerCase().includes("bus route scenery")) {
    return "Our bus routes often offer scenic views. To learn about the scenery along your chosen route, you can visit our website or contact our customer support for insights on the sights you can expect to see during your journey.";
  } else if (userInput.toLowerCase().includes("bus ticket insurance")) {
    return "We offer optional ticket insurance for unexpected events that may affect your travel plans. You can add this insurance during the booking process on our website to provide coverage for cancellations, delays, and more.";
  } else if (userInput.toLowerCase().includes("bus station food options")) {
    return "Many of our bus stations have food options nearby or within the station itself. You can enjoy snacks or meals before your journey or during layovers. For specific information on food options, contact the specific bus station you plan to use.";
  } else if (userInput.toLowerCase().includes("bus ticket printing")) {
    return "You can print your bus ticket at home and present it when boarding, or you can show the e-ticket on your mobile device. Make sure to have a clear and legible copy of your ticket for hassle-free boarding.";
  } else if (userInput.toLowerCase().includes("bus station waiting times")) {
    return "Waiting times at our bus stations may vary depending on the route and time of day. Arrive at the station in advance to ensure you have ample time to board your bus and complete the necessary procedures.";
  } else if (userInput.toLowerCase().includes("bus route weather advisories")) {
    return "For weather advisories along your bus route, please check our website or mobile app for updates. We strive to provide accurate information regarding weather-related issues that may affect travel.";
  } else if (userInput.toLowerCase().includes("bus lost and found policies")) {
    return "Our lost and found policies ensure that lost items are handled with care. If you've lost something on one of our buses, please contact our lost and found department for assistance in locating your item.";
  } else if (userInput.toLowerCase().includes("bus ticket loyalty points")) {
    return "Our loyalty program allows you to earn points with each booking, which can be redeemed for discounts, free trips, or other benefits. You can track and use your loyalty points by logging in to your account on our website or mobile app.";
  } else if (
    userInput.toLowerCase().includes("bus station business services")
  ) {
    return "Some of our bus stations offer business services, such as printing and copying facilities. If you need these services while waiting at the station, please check with the specific bus station you plan to use for availability and fees.";
  } else if (userInput.toLowerCase().includes("bus route border crossings")) {
    return "For bus routes that cross international borders, you may be required to go through customs and immigration checks. Be sure to have the necessary travel documents, such as a valid passport and visas, if applicable.";
  } else if (userInput.toLowerCase().includes("luggage policy")) {
    return "Each passenger is allowed one piece of checked luggage and one carry-on bag. Additional baggage may incur extra fees.";
  } else if (userInput.toLowerCase().includes("cancellation policy")) {
    return "Our cancellation policy allows for free cancellations up to 24 hours before departure. After that, a fee may apply.";
  } else if (userInput.toLowerCase().includes("pets on buses")) {
    return "Yes, we allow small pets on board. Please check our pet policy on our website for more details.";
  } else if (userInput.toLowerCase().includes("lost wallet")) {
    return "We recommend contacting our lost and found department at lostandfound@yourbuscompany.com to inquire about your lost items.";
  } else if (userInput.toLowerCase().includes("change reservation")) {
    return "You can make changes to your reservation online through our website or mobile app, or by contacting our customer support team.";
  } else if (userInput.toLowerCase().includes("nearest bus stop to airport")) {
    return "The nearest bus stop to the airport is located just outside the arrivals terminal. Look for the sign indicating our bus service.";
  } else if (userInput.toLowerCase().includes("bring bicycle on bus")) {
    return "Bicycles are allowed on a space-available basis. Please let us know in advance if you plan to bring a bicycle.";
  } else if (userInput.toLowerCase().includes("arrive at bus station")) {
    return "We recommend arriving at least 30 minutes before your scheduled departure to ensure a smooth boarding process.";
  } else if (userInput.toLowerCase().includes("WiFi password on buses")) {
    return "We offer complimentary WiFi on all our buses. The WiFi password is usually displayed on the bus or available from the driver.";
  } else if (userInput.toLowerCase().includes("senior discounts")) {
    return "Yes, we offer senior discounts for passengers aged 65 and older. Please provide proof of age when booking.";
  } else if (userInput.toLowerCase().includes("lost and found contact")) {
    return "For lost and found inquiries, please contact our lost and found department at lostandfound@yourbuscompany.com.";
  } else if (userInput.toLowerCase().includes("group reservations")) {
    return "For group reservations of 10 or more passengers, please contact our group sales department at groupsales@yourbuscompany.com for special rates and assistance.";
  } else if (userInput.toLowerCase().includes("delayed buses")) {
    return "In the event of bus delays, we will make announcements and provide updates through our mobile app and at the bus station.";
  } else if (userInput.toLowerCase().includes("food and drinks on board")) {
    return "Food and drinks are available for purchase on board. You can also bring your snacks, but please be mindful of other passengers.";
  }
  if (userInput.toLowerCase().includes("hello")) {
    return "Hello! How can I assist you today?";
  } else if (userInput.toLowerCase().includes("bus ticket")) {
    return "Sure, I can help you book a bus ticket. Please provide your destination and date of travel.";
  } else if (userInput.toLowerCase().includes("phone number")) {
    return "Sure, our agency phone number is +3559094490932. Please feel free to call anytime from 9 AM to 9 PM, Monday to Friday.";
  } else if (userInput.toLowerCase().includes("weather")) {
    return "I'm sorry, I don't have access to real-time weather information. You can check a weather website or app for that.";
  } else if (userInput.toLowerCase().includes("restaurant")) {
    return "Certainly! I can recommend some restaurants. What type of cuisine are you in the mood for?";
  } else if (userInput.toLowerCase().includes("movie")) {
    return "Great! I can help you find information about movies. What's the title of the movie you're interested in?";
  } else if (userInput.toLowerCase().includes("news")) {
    return "I can provide you with the latest news. What specific topic or category are you interested in?";
  } else if (userInput.toLowerCase().includes("calculator")) {
    return "Sure, I can perform calculations for you. Please provide the math expression you'd like to calculate.";
  } else if (userInput.toLowerCase().includes("directions")) {
    return "I can assist you with directions. Could you please provide your starting and ending locations?";
  } else if (userInput.toLowerCase().includes("joke")) {
    return "Why don't scientists trust atoms? Because they make up everything!";
  } else if (userInput.toLowerCase().includes("time")) {
    const now = new Date();
    const time = now.toLocaleTimeString();
    return `The current time is ${time}. How can I assist you further?`;
  } else if (userInput.toLowerCase().includes("sports")) {
    return "I can provide you with the latest sports scores and news. What sport are you interested in?";
  } else if (userInput.toLowerCase().includes("book recommendation")) {
    return "I'd love to recommend a book! What genre or type of book are you looking for?";
  } else if (userInput.toLowerCase().includes("translate")) {
    return "I can help you with translations. Please provide the word or phrase you'd like to translate and the target language.";
  } else if (userInput.toLowerCase().includes("exchange rate")) {
    return "I can provide you with the latest exchange rates. Which currency pair are you interested in?";
  } else if (userInput.toLowerCase().includes("history")) {
    return "I can share historical facts and events. What period of history would you like to learn about?";
  } else if (userInput.toLowerCase().includes("recipes")) {
    return "I can suggest some delicious recipes. What type of cuisine or dish are you interested in?";
  } else if (userInput.toLowerCase().includes("quote")) {
    return "Sure, I can share an inspiring quote. What topic or theme would you like the quote to be about?";
  } else if (userInput.toLowerCase().includes("horoscope")) {
    return "I can provide your daily horoscope. What's your zodiac sign?";
  } else if (userInput.toLowerCase().includes("mathematics")) {
    return "I can assist you with various mathematical problems. What specific math question do you have?";
  } else if (userInput.toLowerCase().includes("holiday destinations")) {
    return "I can recommend some beautiful holiday destinations. What kind of vacation are you planning?";
  } else if (userInput.toLowerCase().includes("technology")) {
    return "I can provide information on the latest technology trends and gadgets. What tech topic interests you?";
  } else if (userInput.toLowerCase().includes("languages")) {
    return "I can help you learn a new language. Which language are you interested in?";
  } else if (userInput.toLowerCase().includes("music")) {
    return "I can suggest music for you to listen to. What genre or artist are you in the mood for?";
  } else if (userInput.toLowerCase().includes("job search")) {
    return "I can assist you with your job search. What type of job are you looking for?";
  } else if (userInput.toLowerCase().includes("fun facts")) {
    return "Sure, here's a fun fact: Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!";
  } else if (userInput.toLowerCase().includes("health tips")) {
    return "I can provide you with health tips and advice. What aspect of your health are you interested in?";
  } else if (userInput.toLowerCase().includes("travel tips")) {
    return "I can offer travel tips and recommendations. Where are you planning to travel?";
  } else if (userInput.toLowerCase().includes("coding")) {
    return "I can help with coding and programming questions. What programming language or issue are you dealing with?";
  } else if (userInput.toLowerCase().includes("animal facts")) {
    return "Sure, here's an interesting animal fact: Octopuses have three hearts!";
  } else if (userInput.toLowerCase().includes("literature")) {
    return "I can discuss literature and books. What book or author would you like to talk about?";
  }
  if (userInput.toLowerCase().includes("hello")) {
    return "Hello! How can I help you today?";
  } else if (userInput.toLowerCase().includes("bus ticket")) {
    return "Sure, I can help you book a bus ticket. Please provide your destination and date of travel.";
  } else if (
    userInput
      .toLowerCase()
      .includes(
        "what is the schedule for buses from tirana to saranda next tuesday?"
      )
  ) {
    return "We have buses leaving Tirana for Saranda at 6am, 9:30am, and 3:30pm next Tuesday. The trip takes around 5 hours.";
  } else if (
    userInput
      .toLowerCase()
      .includes("i need to get from korca to vlora on friday morning")
  ) {
    return "We have a bus departing Korca at 9am on Friday that arrives in Vlora at 1pm. Shall I book a ticket?";
  } else if (
    userInput
      .toLowerCase()
      .includes("when is your next bus from shkoder to tirana?")
  ) {
    return "Our next bus from Shkoder to Tirana is tomorrow at 11am, arriving in Tirana at 2pm. Would you like me to reserve a seat for you?";
  } else if (
    userInput
      .toLowerCase()
      .includes("do you have any night buses from durres to tirana?")
  ) {
    return "Yes, we have a bus departing Durres at 11pm nightly, arriving in Tirana at 1am. Should I check ticket availability?";
  } else if (
    userInput
      .toLowerCase()
      .includes(
        "i need a ticket from tirana to pogradec leaving this saturday afternoon"
      )
  ) {
    return "We have a bus departing Tirana at 4pm on Saturday that arrives in Pogradec at 7:30pm. I can book a seat for you if you provide your name and contact information.";
  } else if (
    userInput
      .toLowerCase()
      .includes("when is your earliest bus from elbasan to fier on sunday?")
  ) {
    return "Our first Sunday bus from Elbasan to Fier leaves at 7am and arrives at 9:30am. Let me know if you need a ticket!";
  } else if (
    userInput
      .toLowerCase()
      .includes("i need 2 tickets on your next bus from berat to vlora")
  ) {
    return "Our next bus from Berat to Vlora is tomorrow at 12pm. I can reserve 2 seats for you if you provide the passenger names.";
  } else if (
    userInput
      .toLowerCase()
      .includes(
        "do you have any buses going from tirana to saranda this friday morning?"
      )
  ) {
    return "Yes, we have a bus departing Tirana for Saranda at 9:30am on Friday morning. The journey takes around 5 hours. Should I book tickets?";
  }

  // ...
  else if (
    userInput
      .toLowerCase()
      .includes("when is your first bus from fier to durres on monday?")
  ) {
    return "Our first Monday bus from Fier to Durres departs at 6am and arrives in Durres at 8:15am. Let me know if you need a ticket for that!";
  } else if (
    userInput
      .toLowerCase()
      .includes(
        "i need a ticket on your last bus from pogradec to korca this sunday evening"
      )
  ) {
    return "Our last Sunday bus from Pogradec to Korca leaves at 6pm and gets in around 9pm. I can reserve a seat for you if you provide your contact details.";
  } else if (
    userInput
      .toLowerCase()
      .includes("do you have any night buses from vlora to shkoder?")
  ) {
    return "Unfortunately we do not currently offer any overnight buses between Vlora and Shkoder. Our last daily departure is at 5pm.";
  } else if (
    userInput
      .toLowerCase()
      .includes("what time does your earliest bus leave for elbasan tomorrow?")
  ) {
    return "Our first bus to Elbasan tomorrow leaves Tirana at 6am and arrives at 8:30am. Shall I book a ticket for you?";
  } else if (
    userInput
      .toLowerCase()
      .includes(
        "when is your next bus going from tirana to korca on friday evening?"
      )
  ) {
    return "We have a bus departing Tirana at 4:30pm for Korca this Friday. It arrives around 7:45pm. Let me know if you need a seat!";
  } else if (
    userInput
      .toLowerCase()
      .includes("do you have any buses to berat this saturday afternoon?")
  ) {
    return "Yes, we have a bus leaving Tirana at 2:30pm on Saturday and arriving in Berat at 5pm. Should I check availability for you?";
  } else if (
    userInput
      .toLowerCase()
      .includes(
        "i need tickets for the bus from durres to shkoder tomorrow evening"
      )
  ) {
    return "We have a bus leaving Durres at 9pm tomorrow night that gets into Shkoder at 11:45pm. I can book tickets if you provide passenger details.";
  } else if (
    userInput
      .toLowerCase()
      .includes("when is your next bus from saranda to vlora on sunday?")
  ) {
    return "Our next bus from Saranda to Vlora is this Sunday at 11am, arriving approximately 2pm. Let me know if you need tickets!";
  } else if (
    userInput
      .toLowerCase()
      .includes(
        "do you have any buses going from pogradec to elbasan early monday morning?"
      )
  ) {
    return "Yes, we have a bus departing Pogradec at 6am on Monday that arrives in Elbasan around 9am. Should I check seat availability?";
  } else if (
    userInput
      .toLowerCase()
      .includes("i need 3 tickets from korca to tirana this thursday afternoon")
  ) {
    return "We have a bus leaving Korca at 2:30pm on Thursday and arriving in Tirana at 5:45pm. I can reserve 3 seats if you provide passenger names.";
  } // Previous conversations
  else if (
    userInput
      .toLowerCase()
      .includes("i need to travel from tirana to gjirokastra this weekend")
  ) {
    return "We have several buses running between Tirana and Gjirokastra over the weekend. Would you like me to check schedules for Saturday or Sunday?";
  } else if (
    userInput
      .toLowerCase()
      .includes("what is your earliest bus to fier tomorrow")
  ) {
    return "Our first bus from Tirana to Fier tomorrow is at 5:30am, arriving at 7:45am. Shall I book a ticket for you?";
  } else if (
    userInput
      .toLowerCase()
      .includes("do you have any overnight buses to shkoder")
  ) {
    return "Yes, we have an overnight bus that departs Tirana at 11pm every night and arrives in Shkoder at 5am. Should I check availability?";
  } else if (
    userInput
      .toLowerCase()
      .includes("when can i get a bus from korca to durres on sunday")
  ) {
    return "We have buses from Korca to Durres every Sunday at 8am, 12pm and 5pm. The journey takes around 4 hours. Let me know if you need tickets!";
  } else if (
    userInput
      .toLowerCase()
      .includes("what is your latest bus from vlora to saranda tonight")
  ) {
    return "Our last bus tonight from Vlora to Saranda departs at 9pm and arrives around midnight. Let me know if you need me to book seats.";
  } else if (
    userInput
      .toLowerCase()
      .includes("do you have buses from berat to pogradec tomorrow afternoon")
  ) {
    return "Yes, we have a bus leaving Berat at 2:30pm tomorrow that arrives in Pogradec at 5:45pm. Should I check schedule availability?";
  } else if (
    userInput
      .toLowerCase()
      .includes("when is the first bus from kukes to tirana on monday")
  ) {
    return "The first bus we have from Kukes to Tirana on Monday is at 7am, arriving in Tirana at noon. Let me know if you need tickets for that bus.";
  } else if (
    userInput
      .toLowerCase()
      .includes("i need to get from fier to vlore tomorrow evening")
  ) {
    return "We have a bus departing Fier at 5pm tomorrow evening that arrives in Vlore at 7:30pm. Shall I book seats for you?";
  } else if (
    userInput.toLowerCase().includes("do you have late night buses to peshkopi")
  ) {
    return "Yes, we have a nightly bus departing Tirana for Peshkopi at 10:45pm. It reaches Peshkopi by 3:30am. Let me know if you need tickets.";
  } else if (
    userInput
      .toLowerCase()
      .includes("what is your bus schedule from lushnje to elbasan on friday")
  ) {
    return "On Fridays our buses from Lushnje to Elbasan depart at 6am, 9:30am, 1:30pm and 6pm. Let me know if you need help booking any tickets!";
  } // Previous conversations

  // ...
  else if (
    userInput.toLowerCase().includes("do your buses have wifi or power outlets")
  ) {
    return "Most of our intercity buses do have free WiFi and power outlets at every seat. Let me know if you have a specific route in mind and I can confirm availability.";
  } else if (
    userInput.toLowerCase().includes("how much baggage am i allowed to bring")
  ) {
    return "Each passenger is permitted 1 large suitcase and 1 small carry-on bag. Additional or oversized baggage may incur a fee. Let me know if you need to bring extra bags.";
  } else if (
    userInput.toLowerCase().includes("can i bring my pet dog on the bus")
  ) {
    return "We do allow small dogs and other pets on board as long as they are in a carrier. Please let us know at booking if you will be traveling with a pet.";
  } else if (
    userInput
      .toLowerCase()
      .includes("do you serve any food or drinks during the trip")
  ) {
    return "Most of our long distance buses provide light snacks and drinks like water, coffee, tea and juice. Some routes may have more substantial sandwich meals - let me know your route for details.";
  } else if (
    userInput.toLowerCase().includes("are there rest stops during the journey")
  ) {
    return "Yes, all of our intercity buses stop for short rest breaks every 2-3 hours so passengers can stretch their legs and use the facilities.";
  } else if (
    userInput.toLowerCase().includes("what covid protocols do you have")
  ) {
    return "For everyone's health and safety, we require all passengers to wear masks aboard buses and provide hand sanitizer. Buses are thoroughly disinfected between trips.";
  } else if (userInput.toLowerCase().includes("can i pay with credit card")) {
    return "Yes, we accept most major credit cards for payment online or in person. We can also accept cash or debit cards.";
  } else if (userInput.toLowerCase().includes("do you offer any discounts")) {
    return "We have discounted fares for seniors, students, children under 12, and group bookings. Let me know if you are eligible for a discounted rate.";
  } else if (userInput.toLowerCase().includes("can i reschedule my ticket")) {
    return "Yes, you can reschedule your ticket to a different day or time, subject to availability. There is a small fee for rescheduling. Let me know if you need to change plans.";
  } else if (userInput.toLowerCase().includes("what is your refund policy")) {
    return "Tickets are non-refundable, but you can reschedule to a different trip up to 24 hours prior to departure for a fee. Get in touch if you have any other questions!";
    // Previous conversations

    // ...
  } else if (userInput.toLowerCase().includes("are seats assigned")) {
    return "Yes, all seats are assigned. Let me know if you have a preference.";
  } else if (userInput.toLowerCase().includes("how do I book")) {
    return "You can book online, by phone, or at our station ticket counter.";
  } else if (userInput.toLowerCase().includes("can I select seats")) {
    return "Yes, you can select seats when booking in advance for a small fee.";
  } else if (
    userInput.toLowerCase().includes("are buses wheelchair accessible")
  ) {
    return "Most of our fleet is wheelchair accessible. Please inform us when booking.";
  } else if (userInput.toLowerCase().includes("can I bring a bike")) {
    return "Foldable bikes are permitted. Non-folding bikes may require a fee.";
  } else if (userInput.toLowerCase().includes("do buses run on holidays")) {
    return "Yes, we operate daily service including holidays.";
  } else if (
    userInput.toLowerCase().includes("do you serve vegetarian meals")
  ) {
    return "Yes, vegetarian meals available if requested when booking.";
  } else if (userInput.toLowerCase().includes("can I travel with my infant")) {
    return "Yes, infants under 2 travel free when sitting on a parent's lap.";
  } else if (userInput.toLowerCase().includes("how early should I arrive")) {
    return "Please arrive at the station 15 minutes before departure time.";
  } else if (
    userInput.toLowerCase().includes("do you offer student discounts")
  ) {
    return "Yes, students get 10% off tickets with valid student ID.";
  } else if (userInput.toLowerCase().includes("can I bring alcohol")) {
    return "Outside alcohol is prohibited aboard our buses.";
  } else if (userInput.toLowerCase().includes("can I smoke")) {
    return "Smoking is not permitted aboard buses or at stations.";
  } else if (userInput.toLowerCase().includes("how do I track the bus")) {
    return "You can track the bus in real-time via our mobile app.";
  } else if (userInput.toLowerCase().includes("can I get a refund")) {
    return "Refunds are only allowed up to 24 hours before departure.";
  } else if (userInput.toLowerCase().includes("do you have sleeper buses")) {
    return "Yes, we operate sleeper bus service on select long distance routes.";
  } else if (userInput.toLowerCase().includes("is there a lost & found")) {
    return "Yes, please contact our customer service to locate lost items.";
  } else if (userInput.toLowerCase().includes("can I bring my dog")) {
    return "Only small pets in carriers are permitted aboard buses.";
  } else if (userInput.toLowerCase().includes("do buses have bathrooms")) {
    return "Yes, our long distance buses have onboard restrooms.";
  } else if (userInput.toLowerCase().includes("do you offer group discounts")) {
    return "Yes, we offer discounts for groups of 10 or more. Let me know if booking a group.";
    // Previous conversations

    // ...
  } else if (userInput.toLowerCase().includes("luggage")) {
    return "1 large suitcase and 1 small carry-on permitted.";
  } else if (userInput.toLowerCase().includes("wifi")) {
    return "Free WiFi is available on all buses.";
  } else if (userInput.toLowerCase().includes("pets")) {
    return "Small pets in carriers are allowed.";
  } else if (userInput.toLowerCase().includes("meals")) {
    return "Complimentary snacks and drinks provided.";
  } else if (userInput.toLowerCase().includes("restrooms")) {
    return "Buses have onboard restrooms.";
  } else if (userInput.toLowerCase().includes("mask")) {
    return "Face masks required at stations and aboard buses.";
  } else if (userInput.toLowerCase().includes("credit card")) {
    return "All major credit cards accepted online and in person.";
  } else if (userInput.toLowerCase().includes("discount")) {
    return "Discounts available for seniors, students, children, groups.";
  } else if (userInput.toLowerCase().includes("refund")) {
    return "Refunds allowed up to 24 hours before departure.";
  } else if (userInput.toLowerCase().includes("sleeper bus")) {
    return "Sleeper bus service available on select routes.";
  } else if (userInput.toLowerCase().includes("bikes")) {
    return "Foldable bikes permitted, non-folding may incur fee.";
  } else if (userInput.toLowerCase().includes("holidays")) {
    return "Daily service operates including holidays.";
  } else if (userInput.toLowerCase().includes("vegetarian")) {
    return "Vegetarian meals available upon request.";
  } else if (userInput.toLowerCase().includes("infants")) {
    return "Infants under 2 travel free on parent's lap.";
  } else if (userInput.toLowerCase().includes("arrive")) {
    return "Please arrive 15 minutes before departure.";
  } else if (userInput.toLowerCase().includes("alcohol")) {
    return "Outside alcohol is prohibited aboard buses.";
  } else if (userInput.toLowerCase().includes("smoke")) {
    return "Smoking is not allowed on buses.";
  } else if (userInput.toLowerCase().includes("track")) {
    return "Real-time bus tracking available via our app.";
  } else if (userInput.toLowerCase().includes("lost and found")) {
    return "Please contact customer service about lost items.";
    // Previous conversations

    // ...
  } else if (userInput.toLowerCase().includes("student discount")) {
    return "Students get 10% off tickets with valid student ID.";
  } else if (userInput.toLowerCase().includes("wheelchair access")) {
    return "Most buses are wheelchair accessible, please inform when booking.";
  } else if (userInput.toLowerCase().includes("baggage fees")) {
    return "1 large suitcase and 1 carry-on are permitted free. Additional fees may apply.";
  } else if (userInput.toLowerCase().includes("recline seats")) {
    return "Yes, all seats on our buses are reclining.";
  } else if (userInput.toLowerCase().includes("booking options")) {
    return "Book online, by phone, or at station ticket counters.";
  } else if (userInput.toLowerCase().includes("amenities onboard")) {
    return "Buses offer entertainment, WiFi, power outlets, restrooms.";
  } else if (userInput.toLowerCase().includes("travel insurance")) {
    return "We recommend purchasing travel insurance for full coverage.";
  } else if (userInput.toLowerCase().includes("trip duration")) {
    return "Trip lengths vary by destination. Let me know your route for an estimate.";
  } else if (userInput.toLowerCase().includes("booking assistance")) {
    return "I'm happy to assist with booking tickets. Just let me know departure, destination, and date.";
  } else if (userInput.toLowerCase().includes("passenger limits")) {
    return "Each ticket booking is limited to 6 passengers online.";
  } else if (userInput.toLowerCase().includes("route suggestions")) {
    return "I'd be happy to suggest popular routes and destinations from your location.";
  } else if (userInput.toLowerCase().includes("fare quotes")) {
    return "I can provide up-to-date fare quotes if you tell me your route and travel dates.";
  } else if (userInput.toLowerCase().includes("trip planning")) {
    return "Let me know where you want to go and I can suggest itineraries and travel tips!";
  } else if (userInput.toLowerCase().includes("bus types")) {
    return "We offer standard, sleeper, and luxury buses depending on your route.";
  } else if (userInput.toLowerCase().includes("booking policies")) {
    return "Review full booking policies and FAQs on our website before purchasing.";
  } else if (userInput.toLowerCase().includes("contact information")) {
    return "Reach us at 1-800-BUSES-R-US or contact@bustravel.com.";
  } else if (userInput.toLowerCase().includes("customer support")) {
    return "Our customer support team is available 24/7 at 1-800-555-9876.";
  } else if (userInput.toLowerCase().includes("covid guidelines")) {
    return "Masks required. Buses sanitized frequently for your safety.";
  } else if (userInput.toLowerCase().includes("terms of service")) {
    return "Full terms and conditions on our website. Let me know if you have any other questions!";
  }
  if (userInput.toLowerCase().includes("product warranty information")) {
    return "Our product warranty covers manufacturing defects for one year.";
  } else if (userInput.toLowerCase().includes("order cancellation policy")) {
    return "Orders can be canceled within 24 hours of purchase. Contact our support team for assistance.";
  } else if (userInput.toLowerCase().includes("shipping options")) {
    return "We offer standard, express, and overnight shipping options. Prices and delivery times vary.";
  } else if (userInput.toLowerCase().includes("return process details")) {
    return "To return a product, please visit our website and fill out the return form. Follow the instructions provided.";
  } else if (userInput.toLowerCase().includes("payment methods accepted")) {
    return "We accept credit cards, PayPal, and Apple Pay for online purchases.";
  } else if (userInput.toLowerCase().includes("account password reset")) {
    return "You can reset your account password by clicking the 'Forgot Password' link on the login page.";
  } else if (
    userInput.toLowerCase().includes("subscription cancellation process")
  ) {
    return "To cancel your subscription, go to your account settings and follow the cancellation instructions.";
  } else if (userInput.toLowerCase().includes("privacy policy details")) {
    return "Our privacy policy can be found on our website, and it outlines how we handle your personal information.";
  } else if (userInput.toLowerCase().includes("store locations and hours")) {
    return "We have multiple store locations. Please visit our website for a list of locations and their respective hours of operation.";
  } else if (userInput.toLowerCase().includes("new product releases")) {
    return "Stay updated on new product releases by subscribing to our newsletter or following us on social media.";
  } else if (userInput.toLowerCase().includes("refund processing time")) {
    return "Refunds are typically processed within 5-7 business days after receiving the returned item.";
  } else if (
    userInput.toLowerCase().includes("discount codes and promotions")
  ) {
    return "Check our promotions page for current discounts and promotions. You can also sign up for exclusive discount codes.";
  } else if (userInput.toLowerCase().includes("gift card redemption process")) {
    return "You can redeem gift cards during the checkout process. Enter the gift card code when prompted.";
  } else if (userInput.toLowerCase().includes("job opportunities")) {
    return "For job opportunities and career information, please visit our careers page on our website.";
  } else if (
    userInput.toLowerCase().includes("product availability in specific regions")
  ) {
    return "Product availability may vary by region. Please check our website for information on products available in your area.";
  } else if (userInput.toLowerCase().includes("loyalty rewards program")) {
    return "Join our loyalty rewards program to earn points and get exclusive discounts on future purchases.";
  } else if (
    userInput.toLowerCase().includes("technical support for products")
  ) {
    return "For technical support, please contact our technical support team at techsupport@example.com.";
  } else if (
    userInput.toLowerCase().includes("delivery tracking information")
  ) {
    return "You can track your delivery by entering your tracking number on the 'Track Order' page on our website.";
  } else if (userInput.toLowerCase().includes("size and fit guide")) {
    return "To find your perfect size, refer to our size and fit guide available on our product pages.";
  } else if (
    userInput.toLowerCase().includes("product recalls and safety notices")
  ) {
    return "For information about product recalls and safety notices, please visit our dedicated page on our website.";
  }
  if (userInput.toLowerCase().includes("best road trip routes in Albania")) {
    return "Some popular road trip routes in Albania include the Albanian Riviera, the Llogara Pass, and the Theth-Valbone route.";
  } else if (userInput.toLowerCase().includes("road trip packing checklist")) {
    return "Don't forget essentials like a map, first aid kit, spare tire, and your travel documents when packing for a road trip.";
  } else if (userInput.toLowerCase().includes("fuel prices in Albania")) {
    return "As of my last update, fuel prices in Albania were approximately $1.3 per liter for gasoline and $1.1 per liter for diesel.";
  } else if (
    userInput.toLowerCase().includes("must-see attractions in Albania")
  ) {
    return "Visit attractions like Gjirokastër, Berat, Butrint, and the Lëkurësi Castle during your road trip in Albania.";
  } else if (
    userInput.toLowerCase().includes("wild camping regulations in Albania")
  ) {
    return "Wild camping is generally allowed in Albania, but it's essential to follow Leave No Trace principles and respect the environment.";
  } else if (userInput.toLowerCase().includes("road conditions in Albania")) {
    return "Road conditions in Albania can vary. Major highways are generally well-maintained, but some rural roads may be less developed.";
  } else if (userInput.toLowerCase().includes("Albanian cuisine on the road")) {
    return "Try traditional Albanian dishes like burek, byrek, and qofte as you explore the country during your road trip.";
  } else if (
    userInput.toLowerCase().includes("emergency services contact in Albania")
  ) {
    return "In case of an emergency, dial 112 to reach police, ambulance, or fire services in Albania.";
  } else if (
    userInput.toLowerCase().includes("public transportation safety in Albania")
  ) {
    return "While using public transportation in Albania, keep an eye on your belongings, be cautious of pickpockets, and follow safety guidelines.";
  } else if (userInput.toLowerCase().includes("bus travel in Albania")) {
    return "Buses are a common mode of public transportation in Albania. Check schedules and buy tickets at bus stations or online.";
  } else if (userInput.toLowerCase().includes("train travel in Albania")) {
    return "Albania has a limited train network, and it may not be the fastest way to travel. Check schedules and ticket prices before your journey.";
  } else if (userInput.toLowerCase().includes("taxis in Albania")) {
    return "Taxis are available in most cities in Albania. Ensure the taxi has a meter, or agree on a fare before starting your journey.";
  } else if (
    userInput.toLowerCase().includes("public transportation COVID safety")
  ) {
    return "During the COVID-19 pandemic, public transportation providers in Albania have implemented safety measures. Wear a mask and follow their guidelines.";
  } else if (userInput.toLowerCase().includes("language barrier in Albania")) {
    return "In rural areas, you might encounter a language barrier. Learning a few basic Albanian phrases can be helpful.";
  } else if (userInput.toLowerCase().includes("currency exchange in Albania")) {
    return "The official currency in Albania is the Albanian Lek (ALL). You can exchange money at banks, exchange offices, and ATMs.";
  } else if (
    userInput.toLowerCase().includes("weather during road trips in Albania")
  ) {
    return "Albania experiences a Mediterranean climate. Check the weather forecast before your road trip for the most up-to-date information.";
  } else if (
    userInput.toLowerCase().includes("safety in Albanian national parks")
  ) {
    return "National parks in Albania are generally safe, but follow park regulations, stay on marked trails, and respect wildlife.";
  } else if (userInput.toLowerCase().includes("travel insurance for Albania")) {
    return "Consider purchasing travel insurance that covers medical emergencies, trip cancellations, and other potential issues during your road trip.";
  } else if (userInput.toLowerCase().includes("renting a car in Albania")) {
    return "You can rent a car from various rental agencies in Albania. Make sure to have the necessary documentation and insurance.";
  } else if (
    userInput.toLowerCase().includes("road trip accommodation in Albania")
  ) {
    return "Albania offers a range of accommodations, including hotels, hostels, guesthouses, and campsites for road trip travelers.";
  } else if (userInput.toLowerCase().includes("Pogradec attractions")) {
    return "Pogradec offers several attractions, including Drilon Park, the Museum of Pogradec, and the Church of St. Nicholas. Is there a specific attraction you'd like to learn more about?";
  } else if (userInput.toLowerCase().includes("Korca culture")) {
    return "Korca is known for its vibrant cultural scene. You can explore local museums, galleries, and theaters to experience the rich culture. What aspect of Korca's culture are you interested in?";
  } else if (userInput.toLowerCase().includes("Elbasan history")) {
    return "Elbasan has a fascinating history, with ancient ruins and historical sites like the Elbasan Castle. What period of Elbasan's history are you curious about?";
  } else if (userInput.toLowerCase().includes("Pogradec food")) {
    return "Pogradec is famous for its delicious trout dishes. You can enjoy fresh fish by the lakeside. Are you looking for restaurant recommendations in Pogradec?";
  } else if (userInput.toLowerCase().includes("Korca festivals")) {
    return "Korca hosts various festivals throughout the year, including the Carnival of Korca and the Beer Festival. Are you interested in a specific festival or event?";
  } else if (userInput.toLowerCase().includes("Elbasan landmarks")) {
    return "Elbasan is home to several landmarks, such as the King Mosque and the Clock Tower. Which landmark in Elbasan would you like to know more about?";
  } else if (userInput.toLowerCase().includes("Pogradec accommodation")) {
    return "Pogradec offers a range of accommodation options, from hotels to guesthouses. What type of accommodation are you looking for in Pogradec?";
  } else if (userInput.toLowerCase().includes("Korca history")) {
    return "Korca has a rich history, with influences from various civilizations. Are you interested in a specific historical period in Korca?";
  } else if (userInput.toLowerCase().includes("Elbasan nightlife")) {
    return "Elbasan has a lively nightlife scene with bars and clubs. What kind of nightlife experience are you looking for in Elbasan?";
  } else if (userInput.toLowerCase().includes("Pogradec transportation")) {
    return "Pogradec is accessible by road and bus. If you're coming from Tirana, there are bus services available. How can I assist you with transportation information?";
  } else if (userInput.toLowerCase().includes("Korca nature")) {
    return "Korca is surrounded by beautiful nature, including mountains and lakes. Would you like information on hiking or outdoor activities in Korca?";
  } else if (userInput.toLowerCase().includes("Elbasan museums")) {
    return "Elbasan has museums that showcase its history and culture. Which museum in Elbasan would you like to visit?";
  } else if (userInput.toLowerCase().includes("Pogradec best time to visit")) {
    return "The best time to visit Pogradec is during the spring and summer months when the weather is pleasant. What time of year are you planning to visit?";
  } else if (userInput.toLowerCase().includes("Korca local cuisine")) {
    return "Korca is known for its local cuisine, including dishes like lakror and fasule. What local dish are you interested in trying?";
  } else if (userInput.toLowerCase().includes("Elbasan outdoor activities")) {
    return "Elbasan offers outdoor activities like hiking and exploring natural parks. What kind of outdoor adventure are you looking for in Elbasan?";
  } else if (userInput.toLowerCase().includes("Pogradec language")) {
    return "The primary language spoken in Pogradec is Albanian. Do you need assistance with translation or language services?";
  } else if (userInput.toLowerCase().includes("Korca accommodations")) {
    return "Korca has various accommodation options, from boutique hotels to budget-friendly hostels. What's your preference for accommodation in Korca?";
  } else if (userInput.toLowerCase().includes("Elbasan shopping")) {
    return "Elbasan has local markets and shops where you can find souvenirs and traditional Albanian products. What are you interested in shopping for?";
  } else if (userInput.toLowerCase().includes("Pogradec nearby attractions")) {
    return "There are several nearby attractions around Pogradec, including the ancient city of Lin and the village of Tushemisht. Which nearby attraction would you like to visit?";
  } else if (userInput.toLowerCase().includes("Korca transportation")) {
    return "Korca is well-connected by bus services. If you need information on bus routes or schedules, feel free to ask.";
  } else if (userInput.toLowerCase().includes("Elbasan hotels")) {
    return "Elbasan has a range of hotels to choose from. Do you have a specific budget or type of hotel in mind?";
  } else if (userInput.toLowerCase().includes("Pogradec events")) {
    return "Pogradec hosts events and festivals throughout the year, including the Pogradec Carnival. Are you interested in attending any upcoming events?";
  } else if (userInput.toLowerCase().includes("Korca arts scene")) {
    return "Korca has a thriving arts scene with galleries and theaters. Would you like information about upcoming cultural events in Korca?";
  } else if (
    userInput.toLowerCase().includes("Elbasan public transportation")
  ) {
    return "Elbasan has a local bus system for public transportation. How can I assist you with information on getting around in Elbasan?";
  } else if (userInput.toLowerCase().includes("Pogradec history")) {
    return "Pogradec has a rich history with archaeological sites dating back to ancient times. Is there a specific historical aspect you'd like to explore in Pogradec?";
  } else if (userInput.toLowerCase().includes("Korca shopping")) {
    return "Korca has a variety of shops, from traditional markets to modern shopping centers. What kind of shopping experience are you looking for in Korca?";
  } else if (userInput.toLowerCase().includes("Elbasan local cuisine")) {
    return "Elbasan offers a taste of Albanian cuisine with dishes like qifqi and tavë kosi. What local dish would you like to try?";
  } // Pogradec
  else if (userInput.toLowerCase().includes("Pogradec tourism")) {
    return "Pogradec is a popular tourist destination with its lakeside promenade and cultural attractions. What aspect of tourism in Pogradec would you like to explore?";
  } else if (userInput.toLowerCase().includes("Pogradec architecture")) {
    return "Pogradec features a mix of architectural styles, from Ottoman buildings to modern structures. Do you have a specific architectural landmark in mind?";
  } else if (userInput.toLowerCase().includes("Pogradec local traditions")) {
    return "Pogradec has unique local traditions and customs. Is there a particular tradition you'd like to learn more about?";
  } else if (userInput.toLowerCase().includes("Pogradec public transport")) {
    return "Pogradec has a limited public transport system. If you need help with transportation, feel free to ask for guidance.";
  } else if (userInput.toLowerCase().includes("Pogradec nature")) {
    return "Pogradec is surrounded by beautiful nature, including the Galicica National Park. Are you interested in exploring the natural beauty of the region?";
  } else if (userInput.toLowerCase().includes("Korca education")) {
    return "Korca is home to educational institutions and universities. Are you looking for information about academic opportunities in Korca?";
  } else if (userInput.toLowerCase().includes("Korca landmarks")) {
    return "Korca boasts several landmarks, including the Resurrection of Christ Orthodox Cathedral and the National Museum. What landmark in Korca intrigues you?";
  } else if (userInput.toLowerCase().includes("Korca nightlife")) {
    return "Korca offers a lively nightlife scene with bars and clubs. What kind of nightlife experience are you seeking in Korca?";
  } else if (userInput.toLowerCase().includes("Elbasan transportation")) {
    return "Elbasan has public transportation options, including buses. If you need assistance with transportation in Elbasan, please let me know.";
  } else if (userInput.toLowerCase().includes("Elbasan festivals")) {
    return "Elbasan hosts cultural and music festivals, such as the Elbasan Beer Festival. Are you planning to attend any of the upcoming festivals?";
  } else if (userInput.toLowerCase().includes("Elbasan markets")) {
    return "Elbasan has markets where you can find local products and souvenirs. What kind of items are you interested in purchasing?";
  } else if (userInput.toLowerCase().includes("Elbasan nature")) {
    return "Elbasan is surrounded by natural beauty, including the Shpirag Mountain. Would you like information on outdoor activities in the Elbasan region?";
  } else if (userInput.toLowerCase().includes("Elbasan historical sites")) {
    return "Elbasan is rich in historical sites, including ancient walls and archaeological remains. What historical site in Elbasan would you like to explore?";
  } else if (userInput.toLowerCase().includes("Elbasan accommodations")) {
    return "Elbasan has a range of accommodations, from hotels to guesthouses. What type of accommodation are you looking for during your stay in Elbasan?";
  } else if (userInput.toLowerCase().includes("Elbasan arts")) {
    return "Elbasan has an emerging arts scene. Are you interested in local art exhibitions, galleries, or cultural events in Elbasan?";
  } else if (userInput.toLowerCase().includes("Elbasan cuisine")) {
    return "Elbasan offers a variety of local dishes. Is there a particular Elbasan specialty you'd like to try?";
  } else {
    return "I do not have the answer for that, please ask a new question or call us at +355694490932 or email us at xhokabash@gmail.com";
  }
  // Add 10 more cases for each city...

  // Add 20 more cases each for Pogradec, Korca, and Elbasan...
};
