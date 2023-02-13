document.getElementById('diposite-btn').addEventListener('click',function(){ 

    const depositeFild=document.getElementById('deposite-input')
    const depositeAmountstring = depositeFild.value; 
    const depositeAmount=parseFloat(depositeAmountstring); 

    depositeFild.value=''; 

    const previusdepositeTotal=document.getElementById('deposite-total'); 
    const preDipositeTotalstring=previusdepositeTotal.innerText; 
    const previusDepositeTotalAmount=parseFloat(preDipositeTotalstring);
    
    const newDepositeTotalAmount=previusDepositeTotalAmount+depositeAmount;

    previusdepositeTotal.innerText=newDepositeTotalAmount
    
    
//    total Amount 
    const totalBalance=document.getElementById('total-balance'); 
    const totalAmountstring=totalBalance.innerText; 

    const TotalBalnceAmount=parseFloat(totalAmountstring); 

    const TotalAmount=TotalBalnceAmount+newDepositeTotalAmount; 

    totalBalance.innerText=TotalAmount;
}) 

document.getElementById('withdraw-btn').addEventListener('click',function(){ 
    const withdrawFild=document.getElementById('withdraw-fild'); 
    const withdrawAmountstring=withdrawFild.value; 
    const withdrawAmount=parseFloat(withdrawAmountstring); 
    withdrawFild.value='';

    const PriviusWithdraw=document.getElementById('privious-withdrawAmount'); 
    const priviuswithDrawAmountstring=PriviusWithdraw.innerText; 
    const PriviuswithDrawAmount=parseFloat(priviuswithDrawAmountstring);

    const withDrawAmount=PriviuswithDrawAmount+withdrawAmount;
    PriviusWithdraw.innerText=withDrawAmount; 



    const totalBalanc=document.getElementById('total-balance'); 
    const totalAmountstrin=totalBalanc.innerText; 
    const TotalBalnceAmoun=parseFloat(totalAmountstrin); 

    const totalBalnceAfterWithdraw=TotalBalnceAmoun-withDrawAmount; 
    totalBalanc.innerText=totalBalnceAfterWithdraw;



})

