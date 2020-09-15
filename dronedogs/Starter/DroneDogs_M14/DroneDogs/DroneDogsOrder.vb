﻿Public Class DroneDogsOrder

    Private Sub btnCalculate_Click(sender As Object, e As EventArgs) Handles btnCalculate.Click

        Dim numBeef, numPork, numTurkey, totDogs As Integer 'Declare variables for beef dogs, turkey dogs, pork dogs and total dogs.'
        Dim subtotal, salesTaxAmt, totalCost As Double 'Declare variables for subtotal, salestaxamount and totalcost.'
        'Declare constants
        Const COST_PER_DOG As Double = 1.99
        Const SALES_TAX_RATE As Double = 0.06
        numBeef = Convert.ToInt32(txtBeefDogs.Text)
        numPork = Convert.ToInt32(txtPorkDogs.Text)
        numTurkey = Convert.ToInt32(txtTurkeyDogs.Text)
        'Check to see if the number entered are negative. Also Clears the form when an error has been found. '
        If txtBeefDogs.Text < 0 Then 'Check for the beefdogs value if negative clear form'
            MsgBox("Number of Beef dogs can not be negative")
            txtBeefDogs.Text = ""
            txtPorkDogs.Text = ""
            txtTurkeyDogs.Text = ""
        ElseIf txtPorkDogs.Text < 0 Then 'Check for pork dogs value if negative clear the form'
            MsgBox("Number of Pork dogs can not be negative")
            txtBeefDogs.Text = ""
            txtPorkDogs.Text = ""
            txtTurkeyDogs.Text = ""
        ElseIf txtTurkeyDogs.Text < 0 Then 'Check for the turkey dogs value if negative clear the form '
            MsgBox("Number of Turkey dogs can not be negative")
            txtBeefDogs.Text = ""
            txtPorkDogs.Text = ""
            txtTurkeyDogs.Text = ""
        Else
            totDogs = numBeef + numPork + numTurkey ''
        End If
        subtotal = totDogs * COST_PER_DOG 'total before taxes'
        salesTaxAmt = subtotal * SALES_TAX_RATE 'Calculate the sales tax' 
        totalCost = subtotal + salesTaxAmt 'Calculate total cost'
        'Next three statements display the subtotal, Sales Tax, and Total Cost. '
        txtSubtotal.Text = subtotal.ToString("c2")
        txtSalesTax.Text = salesTaxAmt.ToString("c2")
        txtTotalCost.Text = totalCost.ToString("c2")

    End Sub

    Private Sub btnExit_Click(sender As Object, e As EventArgs) Handles btnExit.Click 'Exits out of the program'
        'Close the form
        MessageBox.Show("Thank you for ordering DroneDogs")
        Me.Close()
    End Sub


    Private Sub btnCustomer_Click(sender As Object, e As EventArgs) Handles btnCustomer.Click 'Opens up the customer form. '
        'Make the customer form visible
        CustomerForm.Show()
    End Sub


    Private Sub btnClear_Click(sender As Object, e As EventArgs) Handles btnClear.Click 'Clears all of the form boxes'
        'Clear all text fields
        txtBeefDogs.Text = ""
        txtPorkDogs.Text = ""
        txtTurkeyDogs.Text = ""
        txtFirstName.Text = ""
        txtLastName.Text = ""
        txtEmail.Text = ""
        txtSubtotal.Text = ""
        txtSalesTax.Text = ""
        txtTotalCost.Text = ""
    End Sub

    Private Sub btnSubmit_Click(sender As Object, e As EventArgs) Handles btnSubmit.Click
        'Check the permission check box, the total cost text box and the email text box
        'Display an error message if any of them are empty
        'Otherwise, display a message box thanking them for ordering
        If chkPermission.Checked = False Then
            MessageBox.Show("ERROR...You must check the location permission check box.")
        ElseIf txtTotalCost.Text = "" Then
            MessageBox.Show("ERROR...You must order at least one item.")
        ElseIf txtEmail.Text = "" Then
            MessageBox.Show("ERROR...Please get customer information for this order.")
        Else
            MessageBox.Show("Thank you for ordering from DroneDogs!")
        End If
    End Sub


End Class