﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TravelPalAPI.Models
{
    public class Event
    {
        public int Id { get; set; }
        // User
        public string HostId { get; set; }
        public UserAccount Host  { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public DateTime Date { get; set; }
        public string Duration { get; set; }
        public string EventDescription { get; set; }
        public int LocationId { get; set; }
        [ForeignKey(nameof(LocationId))]
        public Location Location { get; set; }
        public List<EventImages> EventImages { get; set; }
        public string TestMigracije { get; set; }

    }
}
