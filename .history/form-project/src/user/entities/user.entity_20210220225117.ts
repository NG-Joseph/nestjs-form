import {Entity, Column, Generated, Index, PrimaryGeneratedColumn } from 'typeorm'


@Entity()
export class User {
   @Index()
   @PrimaryGeneratedColumn()
   @Column()
        id: number
    
   @Column({nullable:true})
        name: string;
    
    
   @Column({nullable:true})
        nin: string 

    @Column({nullable:true})    
        email:string

}
