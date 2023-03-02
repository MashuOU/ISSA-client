# ISSA-client
Integrated Service of School Activity

list page:
CMS:
1. dashboard : table siswa, action: delete, edit| select absen : absent, present, sick leave @click
         : add siswa 
         : assign nilaix
         : Chat Modal <tbc>

2. mata pelajaran : table mata pelajaran , action: delete ,edit | add mata pelajaran

3. assign nilai : form => nama siswa <siswa.id>
              pelajaran <pelajaran.id>
              week : 1,2,3,4 <select option>
              month : jan-des <select option>
              Nilai : INTEGER
              Comment : (opt)
              nama Materi : (STR)

4. add siswa : form =>     name:
                   umur:
            gender:
            photoSiswa:

pagination 7 list


Client: 

1.Login Page :     login form (login via NIK)

2.Home  :     Hero News, 
        Detail siswa, 
        status kehadiran,
        Chat modal,
        Grafik absensi (opt)
        Notif Tugas Terdekat        
        Notif Comment
        jadwal mata pelajaran
        jadwal school activity

3.Nilai         :     Card MataPelajaran @click => detail Nilai 

4.Detail Nilai:    Grafik, data per week    
          : table, data per 6 bulan         
    