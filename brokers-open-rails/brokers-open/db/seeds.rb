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
james = User.create(first_name: "James", last_name: "Reichard", email: "james@gmail.com", phone: "222-222-2222", agency: "Weichart", avatar: "http://www.russianmachineneverbreaks.com/wp-content/uploads/2013/06/hetfield_500.jpg")
kevin = User.create(first_name: "Kevin", last_name: "Smith", email: "kevin@gmail.com", phone: "111-111-1111", agency: "D.C. Realty", avatar: "http://cdn.thedailybeast.com/content/dailybeast/articles/2011/09/02/kevin-smith-burned-out-director-s-retirement-red-state-more/jcr:content/body/inlineimage.img.800.jpg/43831963.cached.jpg")

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
Listing.create(date: "5/30/2016", time_start: "11:30AM", time_end: "1:30PM", address: "789 Elm St.",
              city: "Alexandria", state: "Virginia", zipcode: "22105", county: "Fairfax",
              list_price: 1300000, property_status: "Active", property_type: "Townhome",
              mls_num: "987654", bedrooms_num: 4, full_baths: 2, half_baths: 1,
              sponsors: "D.C. Realtors Association", property_description: "Charming home close to everything!",
              food_offered: false, food_description: "There is no food offered",
              incentive: "$25 for the first 3 agents through the door", property_image: "http://redbricktown.com/wp-content/uploads/2014/03/523Queen2.jpg",
              user_id: lauren.id)
Listing.create(date: "6/30/2016", time_start: "1:30PM", time_end: "4:30PM", address: "11691 Margate St.",
              city: "North Hollywood", state: "California", zipcode: "91601", county: "Los Angeles",
              list_price: 550000, property_status: "Active", property_type: "Duplex",
              mls_num: "135795", bedrooms_num: 2, full_baths: 1, half_baths: 0,
              sponsors: "NoHo Title Co.", property_description: "Great duplex in the Colfax school district!",
              food_offered: true, food_description: "Skaf's grill lunch",
              incentive: "", property_image: "http://www.hillcrestprop.com/image.ashx?id=1490791",
              user_id: james.id)
Listing.create(date: "6/20/2016", time_start: "10:30AM", time_end: "1:30PM", address: "5524 Morella Ave.",
              city: "Valley Village", state: "California", zipcode: "91607", county: "Los Angeles",
              list_price: 650000, property_status: "Coming Soon", property_type: "Single-Family House",
              mls_num: "246810", bedrooms_num: 3, full_baths: 2, half_baths: 0,
              sponsors: "Rodeo Realty", property_description: "Nice house with a great back house that brings in additional income!",
              food_offered: true, food_description: "Great Greek will be catering lunch",
              incentive: "Free manicures for all the ladies!", property_image: "https://s-media-cache-ak0.pinimg.com/736x/17/af/85/17af85bcd4f722f6b2c4f1fb889344f8.jpg",
              user_id: kevin.id)
Listing.create(date: "7/10/2016", time_start: "11:00AM", time_end: "1:00PM", address: "761 E. 9th St.",
              city: "Los Angeles", state: "California", zipcode: "90007", county: "Los Angeles",
              list_price: 750000, property_status: "Active", property_type: "Condominium",
              mls_num: "102938", bedrooms_num: 2, full_baths: 2, half_baths: 0,
              sponsors: "DTLA Realty", property_description: "Great condo near FIDM",
              food_offered: true, food_description: "Panini Grill will serve lunch",
              incentive: "", property_image: "http://www.davidkean.com/easterncolumbialofts/5.jpg",
              user_id: kevin.id)
