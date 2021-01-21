



/**     -----Làm việc với mảng -----
 *
 *  1. To string
 *  2. Join
 *  3. Pop
 *  4. Push
 *  5. Shift
 *  6. Unshift
 *  7. Splicign
 *  8. Concat
 *  9. Slicing
 * */

    var languages = [
        'Javascript',
        'PHP',
        'Ruby'
];
    /** chuyển array sang chuỗi ta dùng toString()
     * nó sẽ tự động thêm dấu "," ngăn cách giữa các phần tử của mảng */
    // console.log(languages.toString());

    /** chuyển array sang chuỗi ta dùng join()
    * nó sẽ tự động thêm dấu "," ngăn cách giữa các phần tử của mảng
     * nếu ta truyền vào join (' các ký tự ở đây') thì các phần tử
     * của mảng sẽ được ngăn cách bằng các ký tự đó     */
        // console.log(languages.join('+'));

    /**   pop() xóa đi phần tử cuối mảng và trả về phần tử đã xóa đó
     *      chiều dài của mảng ban đầu nhỏ đi một đơn vị
     *      khi mảng đã rỗng thì pop() tiếp nó sẽ trả giá trị undefined */

        // console.log(languages.pop());
        // console.log(languages);

    /**   push() thêm một hoặc nhiều phần tử cuối mảng và
     *    trả về chiều dài mảng mới
     *    chiều dài của mảng ban đầu tăng thêm    */


        // console.log(languages.push('Dart')); // thêm 1 phần tử vào cuối mảng
        // console.log(languages.push('Dart', 'Java')); // thêm nhiều phần tử

    /**   shift() xóa đi phần tử đầu mảng và trả về phần tử đã xóa đó
    *    chiều dài của mảng ban đầu nhỏ đi một đơn vị
    *    khi mảng đã rỗng thì shift() tiếp nó sẽ trả giá trị undefined */

        // console.log(languages.shift());

    /**   unshift() thêm một hoặc nhiều phần tử đầu mảng và
    *    trả về chiều dài mảng mới
    *    chiều dài của mảng ban đầu tăng thêm    */

        // console.log(languages.unshift('Dart'));// thêm 1 phần tử
        // console.log(languages.unshift('Dart' , 'Java'));// thêm nhiều phần tử


    /**   splicing() cắt hoặc có thể chèn thêm phần tử vào mảng
     */

    // xóa phần tử trong mảng
    // tham số 1: start là vị trí index của phần tử trong mảng bắt đầu xóa
    // tham số 2: deleteCount là số lượng phần tử cần xóa từ vị trí start
    //              trở đi
    //     languages.splice(1, 2);

    // chèn phần tử trong mảng
    // tham số 1: start là vị trí index của phần tử trong mảng bắt đầu xóa
    // tham số 2: deleteCount là số lượng phần tử cần xóa từ vị trí start
    //              trở đi
    // tham số 3: thêm phần tử tại vị trí index đang trỏ
    //     languages.splice(1, 1, 'Dart' , 'Java');
    //     console.log(languages);


    /**   concat() dùng để nối array trả về mảng gốc với độ dài
     * bằng tổng chiều dài 2 mảng và các phần tử được nối vào thì
     * có giá trị index từ vị trí cuối của mảng gốc trở đi*/

    // var languages2 = [
    //     'Dart',
    //     'Java'
    // ];
    //
    // console.log(languages.concat(languages2));

    /**   slice() dùng để cắt một vài phần tử của mảng và
     *  trả về một mảng chứa những phần tử đã cắt đó*/
    // tham số 1: đặt con trở vào vị trí index cần cắt
    // tham số 2: vị trí index dừng cắt
    // nếu không có tham số 2 slice(x) thì nó sẽ cắt đến hết mảng
    // nếu truyền vào slice(0) thì giống như copy một mảng
    // nếu truyền giá trị âm vào thì nó sẽ tính từ index cuối đến index
    // của một mảng

    // console.log(languages.slice(1, 3));
    //console.log(languages.slice(-2, -1));

