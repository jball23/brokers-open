# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Listing.destroy_all

jordan = User.create(first_name: "Jordan", last_name: "Ballard", email: "jordan@gmail.com", phone: "555-555-5555", agency: "Keller Williams", avatar: "https://pmcdeadline2.files.wordpress.com/2016/02/leonardo-dicaprio-the-revenant-1.jpg?w=446&h=299&crop=1")
mike = User.create(first_name: "Mike", last_name: "Nahum", email: "mike@gmail.com", phone: "888-888-8888", agency: "Century 21", avatar: "http://cdn.wegotthiscovered.com/wp-content/uploads/Tom-Hardy.jpg")
lauren = User.create(first_name: "Lauren", last_name: "Kennedy", email: "lauren@gmail.com", phone: "999-999-9999", agency: "Remax", avatar: "http://huo360.com/uploads/2015/06/1433949126754811.jpg")

Listing.create(date: "6/12/2016", time_start: "11:00AM", time_end: "1:00PM", address: "123 Main St.",
              city: "McLean", state: "Virginia", zipcode: "22101", county: "Fairfax",
              list_price: 1200000, property_status: "Active", property_type: "Single-Family House",
              mls_num: "123456", bedrooms_num: 4, full_baths: 3, half_baths: 1,
              sponsors: "ABC Title Co.", property_description: "This is an amaizing house in the heart of McLean",
              food_offered: true, food_description: "Panera Bread lunch",
              incentive: "$100 Amazon gift card", property_image: "https://s-media-cache-ak0.pinimg.com/736x/77/69/a9/7769a9d08ee1748a3b0120eeff5e258c.jpg",
              user_id: jordan.id)
Listing.create(date: "5/12/2016", time_start: "12:00PM", time_end: "2:00PM", address: "456 State Ave.",
              city: "Vienna", state: "Virginia", zipcode: "22102", county: "Fairfax",
              list_price: 1000000, property_status: "Coming Soon", property_type: "Condominium",
              mls_num: "456789", bedrooms_num: 3, full_baths: 2, half_baths: 1,
              sponsors: "Vienna Mortage Co.", property_description: "You've never seen a condo like this!",
              food_offered: true, food_description: "Chipotle burritos for everyone!",
              incentive: "$50 drawing", property_image: "http://www.buckrealtors.com/wp-content/uploads/2012/12/8340-Greensboro-Dr-904-28.jpg",
              user_id: mike.id)
Listing.create(date: "5/30/2016", time_start: "11:30PM", time_end: "1:30PM", address: "789 Elm St.",
              city: "Alexandria", state: "Virginia", zipcode: "22105", county: "Fairfax",
              list_price: 1300000, property_status: "Active", property_type: "Townhome",
              mls_num: "987654", bedrooms_num: 4, full_baths: 2, half_baths: 1,
              sponsors: "D.C. Realtors Association", property_description: "Charming home close to everything!",
              food_offered: false, food_description: "There is no food offered",
              incentive: "$25 for the first 3 agents through the door", property_image: "http://redbricktown.com/wp-content/uploads/2014/03/523Queen2.jpg",
              user_id: lauren.id)
