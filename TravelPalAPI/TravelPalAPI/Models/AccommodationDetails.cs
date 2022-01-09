﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TravelPalAPI.Models
{
    public class AccommodationDetails
    {
        [ForeignKey(nameof(Accommodation))]
        public int AccommodationDetailsId { get; set; }
        public bool Parking { get; set; }
        public bool WiFi { get; set; }
        public bool Shower { get; set; }
        public bool Minibar { get; set; }
        public bool AirConditioning { get; set; }
        public bool Safe { get; set; }
        public bool Dryer { get; set; }
        public bool FlatScreenTV { get; set; }
        public bool PetFriendly { get; set; }
        public bool BBQ { get; set; }
        public bool Refrigerator { get; set; }
        public bool Balcony { get; set; }
        public bool MosquitoNet { get; set; }
        public string Cancellation { get; set; }
        public string HouseRules { get; set; }

        public Accommodation Accommodation { get; set; }
    }
}
