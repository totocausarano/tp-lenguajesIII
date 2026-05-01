$(document).ready(function() {
    let table = $('#tablaTareas').DataTable({
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json'
        }
    });

    $('#mainTitle').on('mouseenter', function() {
        $(this).css('color', '#007bff');
    }).on('mouseleave', function() {
        $(this).css('color', '#333');
    });

    $('#addBtn').click(function() {
        let name = $('#taskName').val();
        let priority = $('#taskPriority').val();

        if (name.trim() === "") {
            alert("Por favor, ingrese un nombre para la tarea.");
            return;
        }

        let actionBtn = '<button class="btn-eliminar">Eliminar</button>';

        let rowNode = table.row.add([
            name,
            priority,
            actionBtn
        ]).draw().node();

        $(rowNode).hide().fadeIn(800);
        $('#taskName').val("");
    });

    $('#tablaTareas').on('click', '.btn-eliminar', function() {
        let targetRow = $(this).closest('tr');

        targetRow.fadeOut(500, function() {
            table.row(targetRow).remove().draw();
        });
    });
});