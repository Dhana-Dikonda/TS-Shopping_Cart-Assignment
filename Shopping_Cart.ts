import * as promptSync from 'prompt-sync';
import _remove from 'lodash/remove';
const prompt = promptSync();
type item=
{
    item_id:number;
    item_name:string;
    item_price:number;
    item_quantity:number;
}
const Shopping_Cart:item[]=[];
const add_item=()=>
{
    const id=parseInt(prompt("Enter proudct ID: "));
    const name=prompt("Enter the name of Product: ");
    const price=parseInt(prompt("Enter proudct Price: "));
    const quantity=parseInt(prompt("Enter Proudct quantity: "));
    Shopping_Cart.push(
        {
            item_id:id,
            item_name:name,
            item_price:price,
            item_quantity:quantity,
        }
    );
    console.log("New item added to the cart");
}
function removeItemWithID(items:item[],id:number):void
{ 
//return _remove(Shopping_Cart, x=>x.item_id==id);
for(let i=0;i<items.length;i++)
{
    if(items[i].item_id===id)
    {
        items.splice(i--,1);
        break;
    }
    else
    {
        console.log("item not found");
    }
}
}
function total_price(items:item[]):void
{
    let total:number;
    total=0;
    for(let i=0;i<items.length;i++)
    {
        //console.log(items[i].item_price);
        total=total+items[i].item_quantity*items[i].item_price;

    }
    console.log(total);
}

function search(items:item[],name:string)
{
   
    for(let i=0;i<items.length;i++)
    {
        
        if(items[i].item_name.toLowerCase()===name.toLowerCase())
        {
            console.log("item found and the product details are: ");
            console.log(items[i]);
            break;
        }
        else{
            console.log("item not found");
        }
    }
}
const displayList=()=>
{
    console.log(Shopping_Cart);
}
function updateWithID(items:item[],id:number)
{
    for(let i=0;i<items.length;i++)
    {
        if(items[i].item_id===id)
        {
            
            let quantity=parseInt(prompt("Enter the quantity: "));
            items[i].item_quantity=quantity;
            break;
        }
        else{
            console.log("item not found");
        }
    }
}
let loop=false;
console.log("add:for adding an item into cart.\n list:for geeting list of items present in cart \n remove:for removing an item from cart \n price:for getting total price of items.\n empty:to empty the cart.\n search:searching an item based on ID.\n update:updating the quantity. \n exit:to exit");
while(!loop)
{
    let functionality=prompt("Type a function you want:");
    switch(functionality)
    {
        case 'add':
           add_item();
            break;
        case 'list':
            displayList();
            break;
        case 'remove':
            let id=parseInt(prompt("Enter product ID to remove: "))
            removeItemWithID(Shopping_Cart,id);
            break;
        case 'price':
            total_price(Shopping_Cart);
            break;
        case 'empty':
            Shopping_Cart.splice(0,Shopping_Cart.length);
            break;
        case 'search':
            let name=prompt("Enter the name of an item you want to search:");
            search(Shopping_Cart,name);
            break;
        case 'update':
            updateWithID(Shopping_Cart,parseInt(prompt("Enter product ID to update quantity: ")));
            break;
            case 'exit':
            loop=true;
                break;
        default:
            console.log("Invalid functionality");
            break;
    }
}

