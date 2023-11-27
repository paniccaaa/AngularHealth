import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';

export interface Doctor {
  id: number;
  name: string;
  universities: string;
  patients: number;
  experience: number;
  avatar: string;
  description: string;
  speciality: string;
}

const ELEMENT_DATA: Doctor[] = [
  {
    id: 1,
    name: 'Wendy Yii',
    universities:
      'MBBS (International Medical University, Malaysia), MRCP (Royal College of Physicians, United Kingdom)',
    patients: 56,
    experience: 9,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/848.jpg',
    description: "I'm a dermatology specialist",
    speciality: 'Dermatology',
  },
  {
    id: 2,
    name: 'John Smith',
    universities:
      'MD (Harvard Medical School, United States), PhD (Stanford University, United States)',
    patients: 86,
    experience: 15,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1006.jpg',
    description: 'I specialize in cardiology',
    speciality: 'Cardiology',
  },
  {
    id: 3,
    name: 'Emily Chen',
    universities:
      'MD (University College London, United Kingdom), DNB (National Board of Examinations, India)',
    patients: 42,
    experience: 8,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1009.jpg',
    description: "I'm a general specialist",
    speciality: 'General',
  },
  {
    id: 4,
    name: 'David Lee',
    universities:
      'MD (Yale School of Medicine, United States), FRCS (Fellow of the Royal College of Surgeons, United Kingdom)',
    patients: 75,
    experience: 12,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1021.jpg',
    description: 'I specialize in dentistry',
    speciality: 'Dentalogy',
  },
  {
    id: 5,
    name: 'Sarah Johnson',
    universities:
      'MD (Columbia University College of Physicians and Surgeons, United States), FRACP (Fellow of the Royal Australasian College of Physicians)',
    patients: 64,
    experience: 10,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1115.jpg',
    description: "I'm a gynecology specialist",
    speciality: 'Gynecology',
  },
  {
    id: 6,
    name: 'Michael Wong',
    universities:
      'MD (University of Toronto Faculty of Medicine, Canada), FRCSC (Fellow of the Royal College of Physicians and Surgeons of Canada)',
    patients: 37,
    experience: 7,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1024.jpg',
    description: "I'm a general specialist",
    speciality: 'General',
  },
  {
    id: 7,
    name: 'Jennifer Liu',
    universities:
      'MD (UCLA David Geffen School of Medicine, United States), FACS (Fellow of the American College of Surgeons)',
    patients: 91,
    experience: 18,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1029.jpg',
    description: 'I specialize in dentistry',
    speciality: 'Dentalogy',
  },
  {
    id: 8,
    name: 'Christopher Wilson',
    universities:
      'MD (University of Sydney, Australia), FRANZCP (Fellow of the Royal Australian and New Zealand College of Psychiatrists)',
    patients: 50,
    experience: 11,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1046.jpg',
    description: 'I specialize in cardiology',
    speciality: 'Cardiology',
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;
  specializations = [
    { id: 1, title: 'Cardiology' },
    { id: 2, title: 'Dermatology' },
    { id: 3, title: 'General' },
    { id: 4, title: 'Dentalogy' },
    { id: 5, title: 'Gynecology' },
  ];
  selectedSpecialization = '';

  timings = new FormControl('');

  timingsList: string[] = [
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
  ];

  displayedColumns: string[] = [
    'id',
    'doctor_name',
    'experience',
    'patients',
    'speciality',
  ];

  dataSource = ELEMENT_DATA;

  selectDoctorEditorTab() {
    this.tabGroup.selectedIndex = 1; // Индекс таба с label "Doctor Editor" (начиная с 0)
  }
}
