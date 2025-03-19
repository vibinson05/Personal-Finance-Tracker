import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
      const transactions = await prisma.transactions.findMany();
      return Response.json(transactions || []);
    } catch (error) {
      console.error("Database Fetch Error:", error);
      return Response.json({ error: "Failed to fetch transactions", details: error.message }, { status: 500 });
    }
  }

  export async function POST(req) {
    try {
      const body = await req.json();
      console.log("Received Data:", body);
  
      const { amount, description, date, category, budgetAmount } = body;
  
      if (!amount || !description || !date || !category || !budgetAmount) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
      }
  
      const newTransaction = await prisma.transactions.create({
        data: {
          amount: parseFloat(amount),
          description,
          date: new Date(date),
          category,
          budgetAmount: parseFloat(budgetAmount),
        },
      });
  
      return NextResponse.json(newTransaction, { status: 201 });
    } catch (error) {
      console.error("POST API Error:", error);
      return NextResponse.json({ error: "Failed to create transaction", details: error.message }, { status: 500 });
    }
  }

export async function PUT(req) {
    try {
      const { id, amount, description, date, category, budgetAmount } = await req.json();
      await prisma.transactions.update({
        where: { id: parseInt(id) },
        data: { amount, description, date: new Date(date), category, budgetAmount },
      });
  
      return Response.json({ message: "Transaction updated successfully" });
    } catch (error) {
      console.error("Update Error:", error);
      return Response.json({ error: "Failed to update transaction", details: error.message }, { status: 500 });
    }
  }
  

export async function DELETE(req) {
    try {
      const { id } = await req.json();
      await prisma.transactions.delete({
        where: { id: parseInt(id) },
      });
  
      return Response.json({ message: "Transaction deleted successfully" });
    } catch (error) {
      console.error("Delete Error:", error);
      return Response.json({ error: "Failed to delete transaction", details: error.message }, { status: 500 });
    }
  }
  
