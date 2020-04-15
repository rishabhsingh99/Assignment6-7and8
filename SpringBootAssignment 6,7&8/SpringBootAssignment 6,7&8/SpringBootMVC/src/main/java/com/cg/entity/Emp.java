package com.cg.entity;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name= "lpu_emp")
@DynamicInsert(true)
@DynamicUpdate(true)
public class Emp {

	@Id
	@Column(name="eid")
	private int empId;
	
	@Column(name="ename",length=25)
	private String empName;
	
	@Column(name="emp_sal")
	private double empSal;
	
	@DateTimeFormat(pattern = "yyyy-M-d")
	private LocalDate doj;
	
	@Transient
	private String strDoj;
	
	@ManyToOne
	@JoinColumn(name="dept_id", referencedColumnName = "did")
	private Dept dept=new Dept();

	public int getEmpId() {
		return empId;
	}

	public void setEmpId(int empId) {
		System.out.println("EmpID "+empId);
		this.empId = empId;
	}

	public String getEmpName() {
		return empName;
	}

	public void setEmpName(String empName) {
		System.out.println("EmpName "+empName);
		this.empName = empName;
	}

	public double getEmpSal() {
		return empSal;
	}

	public void setEmpSal(double empSal) {
		
		this.empSal = empSal;
	}

	public LocalDate getDoj() {
		return doj;
	}

	public void setDoj(LocalDate doj) {
//		/*System.out.println("DOJ "+ strDoj);
//		DateTimeFormatter dtFormatter =DateTimeFormatter.ofPattern("yyyy-M-d");
//		this.doj = LocalDate.parse(strDoj,dtFormatter);
		this.doj=doj;
	}
	

	public String getStrDoj() {
		DateTimeFormatter dfFormatter =DateTimeFormatter.ofPattern("d-MMM-yyyy");
		this.strDoj=doj.format(dfFormatter);
		return strDoj;
	}

	public Dept getDept() {
		return dept;
	}

	public void setDept(Dept dept) {
		this.dept = dept;
	}

	@Override
	public String toString() {
		
		return empId+" "+empName+" "+empSal+" "+dept+" "+doj;
	}
	
	
	
}
