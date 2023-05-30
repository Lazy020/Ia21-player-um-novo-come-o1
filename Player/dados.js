  async function main(){
    const request = await fetch("list1.json")
    const data = await request.text()
    console.log(data)
   } main( )