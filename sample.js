$(document).ready(function(){
  function score_indicate(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
	let number = subject_points.length
    
    let sum = 0;
	for (let i =0; i < number; i++){
			  sum += subject_points[i];
			 }  
	
	let average = sum / number;
    $("#sum_indicate").text(sum);
    $("#avarage_indicate").text(average);
  };

  function get_achievement(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
	let number = subject_points.length
    let sum = 0;
		for (let i =0; i < number; i++){
			  sum += subject_points[i];
			 }
	   let average = sum / number;
		if (average >=80){
			return "A";
		} else if (average>=60){
			return "B";
		} else if (average >= 40){
			return "C";
		} else {
			return "D";
		}
	}
	

  function get_pass_or_failure(){
	 let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
	let number = subject_points.length
    let judge = "合格";
		for (let i =0; i < number; i++){
			　if (subject_points[i] <60){
				judge = "不合格"; 
				 break;
			 }  
		   }
		return judge
	}

  function judgement(){
    let achievement = get_achievement();
	let pass_or_failure = get_pass_or_failure();
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}です。
	${pass_or_failure}です</label>`);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });

  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });

  $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });

  $('#btn-declaration').click(function() {
    judgement();
  } );
});