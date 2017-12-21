angular.module('myTodoApp')
    .provider('todos', function () {
    var todos = [
        { id: 1, description: "todo 1" },
        { id: 2, description: "todo 2" },
        { id: 3, description: "todo 3" }
    ];
    this.$get = function () {
        function getTodos() {
            return todos;
        }
        return {
            getTodos: getTodos
        };
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8vdG9kb1Byb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO0tBQzFCLFFBQVEsQ0FBQyxPQUFPLEVBQUU7SUFDbEIsSUFBSSxLQUFLLEdBQUc7UUFDVCxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsV0FBVyxFQUFDLFFBQVEsRUFBQztRQUM1QixFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsV0FBVyxFQUFDLFFBQVEsRUFBQztRQUM1QixFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUUsV0FBVyxFQUFDLFFBQVEsRUFBQztLQUM1QixDQUFDO0lBRUosSUFBSSxDQUFDLElBQUksR0FBRztRQUNYO1lBQ0MsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNkLENBQUM7UUFFRCxNQUFNLENBQUM7WUFDTixRQUFRLEVBQUcsUUFBUTtTQUNuQixDQUFDO0lBQ0gsQ0FBQyxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoidG9kby90b2RvUHJvdmlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnbXlUb2RvQXBwJylcclxuLnByb3ZpZGVyKCd0b2RvcycsIGZ1bmN0aW9uICgpIHtcclxuXHR2YXIgdG9kb3MgPSBbXHJcblx0XHRcdFx0e2lkOjEsIGRlc2NyaXB0aW9uOlwidG9kbyAxXCJ9LFxyXG5cdFx0XHRcdHtpZDoyLCBkZXNjcmlwdGlvbjpcInRvZG8gMlwifSxcclxuXHRcdFx0XHR7aWQ6MywgZGVzY3JpcHRpb246XCJ0b2RvIDNcIn1cclxuXHRcdFx0XTtcclxuXHJcblx0dGhpcy4kZ2V0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHRmdW5jdGlvbiBnZXRUb2RvcyAoKSB7XHJcblx0XHRcdHJldHVybiB0b2RvcztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRnZXRUb2RvcyA6IGdldFRvZG9zXHJcblx0XHR9O1xyXG5cdH07XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiQzpcXHNyY1xcdGVzdFxcbmdUZXN0X3RzIn0=
